import Details from '@/components/ContactScreen/Details/Details';
import OfflineContacts from '@/components/ContactScreen/OfflineContacts/OfflineContacts';
import OnlineContacts from '@/components/ContactScreen/OnlineContacts/OnlineContacts';
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <Details />
      <OnlineContacts />
      <OfflineContacts />
    </div>
  );
};

export default Contact;
