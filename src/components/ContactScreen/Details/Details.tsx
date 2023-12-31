'use client';
import Image from 'next/image';
import avatarSvg from '../../../../public/avatar.svg';
import React, { useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { pusherClient } from '@/lib/pusher';
import { User } from '@prisma/client';
interface DetailsProps {
  currentUser: User;
  chosenPlayer?: User;
}
const Details : React.FC<DetailsProps> = ({ currentUser, chosenPlayer }) => {
  const router = useRouter();

  const handleMessageClick = useCallback(() => {
    axios.post('/api/conversations', { userId: chosenPlayer?.id }).then((data) => {
      router.push(`/chat/${data.data.id}`);
    });
  }, [chosenPlayer, router]);

  const handleGameResponse = (accepted : boolean, gameRoomId: string) => {
    if (accepted) router.push('/backgammon/' + gameRoomId);
    else console.error('failed to trigger game-response event');
  };

  const handleGameClick = async () => {
    const response = await axios.post('/api/games', { otherUserId: chosenPlayer?.id });
    const gameRoomId = response.data;
    pusherClient.subscribe(gameRoomId);
    pusherClient.bind('game-response', ({accepted}: {accepted: boolean}) => {
      handleGameResponse(accepted, gameRoomId);
    });
  };

  return (
    <div className=" flex flex-col items-center p-10">
      <div className="relative inline-block">
        <Image
          className="inline-block h-[3.875rem] w-[3.875rem] rounded-md ring-2 ring-gray-400 dark:ring-gray-800"
          width={500}
          height={500}
          src={avatarSvg}
          alt="Image Description"
        />
        <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
      </div>
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {currentUser?.username}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{currentUser?.email}</span>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <button
          onClick={handleGameClick}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Play Backgammon {chosenPlayer?.isOnline && <span> with: {chosenPlayer.username}</span>}
        </button>
        <button
          onClick={handleMessageClick}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        >
          Message {chosenPlayer && <span>{chosenPlayer.username}</span>}
        </button>
      </div>
    </div>
  );
};
export default Details;
