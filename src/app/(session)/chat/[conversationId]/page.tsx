import getConversationById from '@/actions/getConversationById';
import getMessages from '@/actions/getMessages';
import ChatHistory from '@/components/ChatScreen/ChatHistory/ChatHistory';
import Form from '@/components/ChatScreen/Form/Form';
import Header from '@/components/ChatScreen/Header/Header';

interface IParams {
  conversationId: string;
}
const Chat = async ({ params } : {params: IParams}) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);
  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          an error occured
        </div>
      </div>
    )
  }

  return ( 
    <div className="h-screen">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <ChatHistory initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
}

export default Chat;
