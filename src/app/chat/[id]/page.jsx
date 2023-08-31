import ChatScreen from '@/components/ChatScreen/ChatScreen';

const Chat = async ({ params }) => {
  console.log(params);
  const response = await fetch(process.env.NEXTAUTH_URL + `/api/chat/${params.id}`);
  const userData = await response.json();
  return userData ? <ChatScreen user={userData} /> : <div>User not found</div>;
};

export default Chat;
