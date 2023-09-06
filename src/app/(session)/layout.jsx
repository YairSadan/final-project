import React from 'react';
import getCurrentUser from '@/actions/getCurrentUser';
import GameRequetsProvider from '@/Providers/GameRequestProvider';

const Layout = async ({ children }) => {
  const currentUser = await getCurrentUser();

  return (
    <GameRequetsProvider currentUserId={currentUser.id}>
      <div>{children}</div>
    </GameRequetsProvider>
  );
};

export default Layout;
