'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';

interface GameRequestModalProps {
  requestDetails: {
    gameRoomId: string;
    requesterName: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const GameRequestModal: React.FC<GameRequestModalProps> = ({ requestDetails, isOpen, onClose }) => {
  const router = useRouter();
  const { gameRoomId, requesterName } = requestDetails;
    const handleGameResponse = async (accepted : boolean) => {
    try {
      const res =await axios.post('/api/triggerPusherEvent', {
        event: 'game-response',
        channel: gameRoomId,
        data: { accepted: accepted },
      });
      if (res.data) {
        if (accepted) router.push('/backgammon/' + gameRoomId);
        onClose();
      } else console.error('failed to trigger game-response event');
    } catch (error) {
      console.log(error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
          <h1 className="text-2xl mb-4">Game Request</h1>
          <p className="mb-4">Would you like to play a game with {requesterName}?</p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => {
                handleGameResponse(false);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Decline
            </button>
            <button
              onClick={() => {
                handleGameResponse(true);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRequestModal;
