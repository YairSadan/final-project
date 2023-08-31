import Header from './Header/Header';
import ChatHistory from './ChatHistory/ChatHistory';
import MessageComposer from './MessageComposer/MessageComposer';

const ChatScreen = ({ user }) => {
  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <Header username={user.name} />
      <ChatHistory />
      <MessageComposer />
    </div>
  );
};

export default ChatScreen;
