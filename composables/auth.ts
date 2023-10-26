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
    changeUserName: (name: string) => void
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
        token.value.photoURL = userCredential.user.photoURL;
        navigateTo('/')
      })
      .catch((error) => {
        alert('パスワードまたはユーザIDが間違っています。');
      });
      
    };


    const signUp = async (email: string, password: string, userName: string): Promise<void> => {
      const iconUrl = 'https://firebasestorage.googleapis.com/v0/b/realtimechat-5a1ad.appspot.com/o/f_f_object_174_s512_f_object_174_0nbg.png?alt=media&token=5fff03bc-3402-453c-874c-0c7d1cc551f0&_gl=1*a860gj*_ga*MjA4MTI4MDQ0OS4xNjk1MDk0OTAz*_ga_CW55HF8NVT*MTY5ODMyMDU0MS41Mi4xLjE2OTgzMjA4MjAuNTcuMC4w';
      const auth = getAuth();
      const db = getFirestore();

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser,
          {
            displayName: userName,
            photoURL: iconUrl
          })
        setDoc(doc(db, `/user/${auth.currentUser.uid}`), {
          name: userName,
          iconData: iconUrl,
          profile: "",
        });
        alert('登録完了しました。');
        navigateTo('/login')
      })
      .catch((error) => {
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
      token.value.token = null;    
      token.value.email = null;
      token.value.uid = null;
      token.value.userName = null;
      token.value.photoURL = null;
      navigateTo('/login')
    };
  
    const checkAuthState = (): void => {
      // serverからは利用できなくします
      if (process.server) return;
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if(user) {
          const idToken = await user.getIdToken();
          token.value.token = idToken;
          token.value.email = user.email;
          token.value.uid = user.uid;
          token.value.userName = user.displayName;
          token.value.photoURL = user.photoURL;
        } else {
          token.value.token = null;    
          token.value.email = null;
          token.value.uid = null;
          token.value.userName = null;
          token.value.photoURL = null;        }
      });
    };

    const changeUserName = (name:string): void => {
      const auth = getAuth();
        updateProfile(auth.currentUser,{ displayName: name,})
        .then(() => {
          alert('登録が完了しました。');
        }).catch((error) => {
          alert('エラーにより登録ができませんでした。');
        });
    }
  
    return {
      signIn,
      signOut,
      signUp,
      token,
      checkAuthState,
      changeUserName,
    }
  }