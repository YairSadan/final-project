import getCurrentUser from '@/actions/getCurrentUser';
import getUsers from '@/actions/getUsers';
import ContactScreen from '@/components/ContactScreen/ContactScreen';
import React from 'react';

const ContactLayout = async ({ children } : {children : React.ReactNode}) => {
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
