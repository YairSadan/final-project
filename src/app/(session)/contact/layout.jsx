import getCurrentUser from '@/actions/getCurrentUser';
import getUsers from '@/actions/getUsers';
import ContactScreen from '@/components/ContactScreen/ContactScreen';

const ContactLayout = async ({ children }) => {
  const users = await getUsers();
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      {children}
      <ContactScreen currentUser={currentUser} users={users} />
    </div>
  );
};

export default ContactLayout;
