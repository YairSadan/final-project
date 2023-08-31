import Header from './Header/Header';
import ChatHistory from './ChatHistory/ChatHistory';
import TextArea from './TextArea/TextArea';

const ChatScreen = ({user}) => {
  return (
    <div className='flex flex-col items-center h-screen justify-between'>
      <Header username={user.name} />
      <ChatHistory />
      <TextArea />
    </div>
  );
};

export default ChatScreen;
