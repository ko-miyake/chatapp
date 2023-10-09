import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
  } from 'firebase/auth'
  
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

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser,{displayName: userName})
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