'use client';
import GameRequestModal from '@/components/Layout/GameRequestModal/GameRequestModal';
import { pusherClient } from '@/lib/pusher';
import React, { useEffect, useState } from 'react';

export interface GameRequestProviderProps {
  children: React.ReactNode;
  currentUserId: string;
}

export default function GameRequetsProvider({ children, currentUserId }: GameRequestProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [requestDetails, setRequestDetails] = useState({
    gameRoomId: '',
    requesterName: '',
  });
  useEffect(() => {
    pusherClient.subscribe(currentUserId);
    pusherClient.bind(
      'game-request',
      ({ gameRoomId, requesterName }: { gameRoomId: string; requesterName: string }) => {
        setRequestDetails({ gameRoomId, requesterName });
        setModalOpen(true);
      }
    );
    return () => {
      pusherClient.unsubscribe(currentUserId);
      pusherClient.unbind('game-request');
    };
  }, [currentUserId]);
  return (
    <div>
      <GameRequestModal
        requestDetails={requestDetails}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      {children}
    </div>
  );
}
