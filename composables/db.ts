import { getDatabase, ref, push, set, onValue } from "firebase/database";

type ChatRoom = {
    createUserName: string | null
    createUserID: string | null,
    title: string | null,
    date: string | null
}

type ChatText = {
    chatroom: string| null,
    username: string | null,
    userID: string | null
    text: string | null,
    date: string | null
}

type DB = {
    chatRooms: ChatRoom[] | null,
    viewMessage: ChatText[] | null, 
    sendChat: () => Promise<void>;
    createChatRoom: () => Promise<void>;
    getChatRooms: () => Promise<ChatRoom[]>;
    getRoom: () => Promise<void>;
};
export const useDB = (): DB => {
    const chatRooms: ChatRoom[] | null = useState('chatrooms', ()=> null)
    const viewMessage: ChatText[] | null = useState('viewMessage', () => null); 

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
    const getChatRooms = async () :Promise<ChatRoom[]> => {
        const db = getDatabase();
        const ref_message =  ref(db, 'chatroom');
        onValue(ref_message, (snapshot) => {
            chatRooms.value = snapshot.val();
        });
        return chatRooms;
    }

    const getRoom = async ( id:string ) :Promise<ChatText[] | null> => {
        const db = getDatabase();
        const ref_message =  ref(db, `message/${id}`);
        onValue(ref_message, (snapshot) => {
            viewMessage.value = snapshot.val();
        });
        const element = document.documentElement;
        const bottom: number = element.scrollHeight - element.clientHeight;
        window.scroll(0, bottom); 
        return viewMessage;
    }

    const sendChat = async (text:string, chatroom:string):Promise<void> => {
        const { token } =  useAuth();
        const db = getDatabase();
        const postListRef = ref(db, `message/${chatroom}`);
        const now: Date = new Date();

        push(postListRef, {
            chatroom: chatroom,
            username: token.value.userName,
            userID: token.value.uid,
            text: text,
            date: now.getMonth() + 1 + '/' + now.getDate() + '/' + now.getHours() + '時' + now.getMinutes() + '分'
      });
}
    
        
    return{
        chatRooms,
        viewMessage,
        sendChat,
        createChatRoom,
        getChatRooms,
        getRoom
    }

}


