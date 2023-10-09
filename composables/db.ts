import { getDatabase, ref, push, set, onValue } from "firebase/database";

type ChatRoom = {
    createUserName: string | null
    createUserID: string | null,
    title: string | null,
    date: string | null
}

type DB = {
    chatrooms, 
    createChatRoom: () => Promise<void>;
    getChatRooms: () => Promise<any>;
};
export const useDB = (): DB => {
    let chatrooms = [];

    // 新規ルール作成
    const createChatRoom = async (chatroomName:string):Promise<void> => {
        const { token } =  useAuth();
        const db = getDatabase();
        const postListRef = ref(db, 'chatroom');
        const now: Date = new Date();
        const newPostRef = push(postListRef,{
            createUserName: token.value.userName,
            createUserID: token.value.uid,
            title: chatroomName,
            date: now.getMonth() + 1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
        });

    }
    // 全ルーム取得
    const getChatRooms = async () :Promise<any> => {
        const db = getDatabase();
        const ref_message =  ref(db, 'chatroom');          
        onValue(ref_message, (snapshot) => {
            // useState('chatrooms', () => snapshot.val());
            chatrooms = snapshot.val();
        });
        console.log(chatrooms);
        return chatrooms;
    }
    
        
    return{
        chatrooms,
        createChatRoom,
        getChatRooms
    }

}


