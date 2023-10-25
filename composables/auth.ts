import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
  } from 'firebase/auth'

  import {
    getFirestore,
    collection,
    where,
    query,
    setDoc,
    doc,
    getDocs,
    addDoc
  } from '@firebase/firestore';
  
  type Auth = {
    token: globalThis.Ref<User | null>;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, userName: string) => Promise<void>
    signOut: () => Promise<void>;
    checkAuthState: () => void;
  };

  export const useAuth = (): Auth => {
    const token = useToken();
  
    const signIn = async (email: string, password: string): Promise<void> => {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        token.value.token = userCredential.user.accessToken;    
        token.value.email = userCredential.user.email;
        token.value.uid = userCredential.user.uid;
        token.value.userName = userCredential.user.displayName;
        navigateTo('/')
      })
      .catch((error) => {
        alert('パスワードまたはユーザIDが間違っています。');
        console.log(error)
      });
      
    };


    const signUp = async (email: string, password: string, userName: string): Promise<void> => {
      const auth = getAuth();
      const db = getFirestore();

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser,{displayName: userName})
        setDoc(doc(db, `/user/${auth.currentUser.uid}`), {
          name: userName,
          iconData: null,
          profile: "",

        });
        alert('登録完了しました。');
        navigateTo('/login')
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case 'auth/invalid-email':
              alert('このメールアドレスは無効です。');
            break;
          case 'auth/email-alerady-in-use':
              alert('このメールアドレスは既に使用されています。');
            break;
          default:
              alert('エラーにより登録ができませんでした。')
            break;
        }
      });
    };
  
    const signOut = async (): Promise<void> => {
      const auth = getAuth();
      await firebaseSignOut(auth);
      token.value = null;
    };
  
    const checkAuthState = (): void => {
      // serverからは利用できなくします
      if (process.server) return;
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if(user) {
          console.log(user);
          const idToken = await user.getIdToken();
          token.value.token = idToken;
          token.value.email = user.email;
          token.value.uid = user.uid;
          token.value.userName = user.displayName;
        } else {
          token.value = null;
        }
      });
    };
  
    return {
      signIn,
      signOut,
      signUp,
      token,
      checkAuthState,
    }
  }