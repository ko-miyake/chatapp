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
        const iconUrl = 'https://firebasestorage.googleapis.com/v0/b/realtimechat-5a1ad.appspot.com/o/f_f_object_174_s512_f_object_174_0nbg.png?alt=media&token=5fff03bc-3402-453c-874c-0c7d1cc551f0&_gl=1*a860gj*_ga*MjA4MTI4MDQ0OS4xNjk1MDk0OTAz*_ga_CW55HF8NVT*MTY5ODMyMDU0MS41Mi4xLjE2OTgzMjA4MjAuNTcuMC4w';
        const storage = getStorage();
        const { token } = useAuth();
        if(uid === token.value.uid) return token.value.photoURL;
        const spaceRef = ref(storage, `icon/${uid}/icon.png`);
        let url = await getDownloadURL(spaceRef).catch(e => {
            return;
        });
        if(!url) url = iconUrl;
        return url;
    }
    
        
    return{
        uploadIcon,
        getIcon
    }

}
