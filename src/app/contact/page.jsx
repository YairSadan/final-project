'use client';
import Details from '@/components/ContactScreen/Details/Details';
import OfflineContacts from '@/components/ContactScreen/OfflineContacts/OfflineContacts';
import OnlineContacts from '@/components/ContactScreen/OnlineContacts/OnlineContacts';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Contact = () => {
  const session = useSession();
  console.log(session);
  const router = useRouter();
  if (session.status === 'authenticated') {
    return (
      <div className='flex flex-col h-screen justify-between items-center'>
        <Details />
        <OnlineContacts />
        <OfflineContacts />
      </div>
    );
  }
  if (session.status === 'unauthenticated') router?.push('/login');
};

export default Contact;
