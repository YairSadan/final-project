import React from 'react';
import getCurrentUser from '@/actions/getCurrentUser';
import GameRequetsProvider from '@/Providers/GameRequestProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser() || {id: ''};
  return ( 
    <GameRequetsProvider currentUserId={currentUser.id}>
      {children}
    </GameRequetsProvider>
  );
};

export default Layout;
