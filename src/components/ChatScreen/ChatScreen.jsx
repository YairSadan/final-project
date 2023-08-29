import React from 'react';
import Header from './Header/Header';
import ChatHistory from './ChatHistory/ChatHistory';
import TextArea from './TextArea/TextArea';

const ChatScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <Header />
      <ChatHistory />
      <TextArea />
    </div>
  );
};

export default ChatScreen;
