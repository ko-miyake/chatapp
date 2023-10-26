import { getStorage, ref, uploadBytesResumable ,getDownloadURL} from "firebase/storage";
import { getAuth, updateProfile} from 'firebase/auth'

type Storage = {
    uploadIcon: () => void;
    getIcon: ()=> Promise<string>
};

export const useStorage = (): Storage => {
      
    // 新規ルール作成
    const uploadIcon = (file:any):void => {
        const { token } = useAuth();
        const auth = getAuth();
        const storage = getStorage();
        const fileType = file.name.split('.').pop();
        const storageRef = ref(storage, `icon/${token.value.uid}/icon.png`);
        // Upload the file and metadata
        uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef)
            .then((url) => {
                updateProfile(auth.currentUser,{ photoURL: url})
                alert('画像の登録が完了しました。');
            }).catch(e => {
                alert('エラーにより登録ができませんでした。');
            })

            
        })
    }

    const getIcon = async ( uid: string ):Promise<string> => {
        const storage = getStorage();
        const spaceRef = ref(storage, `icon/${uid}/icon.png`);
        const url = await getDownloadURL(spaceRef)
        return url;
    }
    
        
    return{
        uploadIcon,
        getIcon
    }

}
