'use client';
import GameRequestModal from '@/components/Layout/GameRequestModal/GameRequestModal';
import { pusherClient } from '@/lib/pusher';
import { useState } from 'react';

export default function GameRequetsProvider({ children, currentUserId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [requestDetails, setRequestDetails] = useState({});
  pusherClient.subscribe(currentUserId);

  pusherClient.bind('game-request', ({ gameRoomId, requesterName }) => {
    setRequestDetails({ gameRoomId, requesterName });
    setModalOpen(true);
  }
  
  );
  return (
    <div>
      <GameRequestModal requestDetails={ requestDetails} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {children}
    </div>
  );
}
