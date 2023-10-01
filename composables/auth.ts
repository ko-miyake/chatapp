import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
  } from 'firebase/auth'
  
  type Auth = {
    token: globalThis.Ref<string | null>;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, userName: string) => Promise<void>
    signOut: () => Promise<void>;
    checkAuthState: () => void;
  };
  
  export const useAuth = (): Auth => {
    const token = useToken();
  
    const signIn = async (email: string, password: string): Promise<void> => {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      token.value = idToken;
    };

    const signUp = async (email: string, password: string): Promise<void> => {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
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
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( errorCode );
            console.log( errorMessage );
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
          const idToken = await user.getIdToken();
          token.value = idToken;
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