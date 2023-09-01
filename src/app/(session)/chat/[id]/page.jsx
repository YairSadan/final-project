import ChatScreen from '@/components/ChatScreen/ChatScreen';
async function getUser(id) {
  const response = await fetch(`http://localhost:3000/api/chat/${id}`);
  return response.json();
}
const Chat = async ({ params }) => {
  const data = await getUser(params.id)
  return <ChatScreen user={data} /> 
};

export default Chat;
