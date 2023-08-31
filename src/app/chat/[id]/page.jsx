import ChatScreen from '@/components/ChatScreen/ChatScreen';

const Chat = async ({ params }) => {
  console.log(params);
  const response = await fetch(process.env.NEXTAUTH_URL + `/api/${params.id}`);
  const userData = await response.json();
  return <ChatScreen user={userData} />;
};

export default Chat;
