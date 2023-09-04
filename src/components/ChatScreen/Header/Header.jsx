'use client';
import useOtherUser from '@/hooks/useOtherUser';
import { Link } from 'lucide-react';
import React, { useMemo } from 'react';
import { HiChevronLeft, HiEllipsisHorizontal } from 'react-icons/hi2';

function Header({ conversation }) {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    return 'Active';
  }, []);
  return (
    <>
      <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
          >
            <HiChevronLeft size={32} />
          </Link>
          {/* {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )} */}
          <div className="flex flex-col">
            <div>{conversation.name || otherUser.username}</div>
            <div className="text-sm font-light text-neutral-500">{statusText}</div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
        />
      </div>
    </>
  );
}

export default Header;
