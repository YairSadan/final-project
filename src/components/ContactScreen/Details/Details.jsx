'use client';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import avatarSvg from '../../../../public/avatar.svg';
import Link from 'next/link';
const Details = ({ chosenPlayer }) => {
  const session = useSession();
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(session.data?.user);
  }, [session]);
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
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.username}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Play Backgammon {chosenPlayer.lastSeen && chosenPlayer.username}
        </button>
        <Link href={`/chat/${chosenPlayer.id}`} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
          Message {chosenPlayer.username}
        </Link>
      </div>
    </div>
  );
};
export default Details;
