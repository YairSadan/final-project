'use client';
import avatarSvg from '../../../../public/avatar.svg';
import Image from 'next/image';

const ContactsList = ({ users, setChosenPlayer}) => {
  return (
    <ul
      role="list"
      className="divide-y dark:bg-slate-900 divide-gray-100 dark:divide-gray-700 overflow-scroll px-40"
    >
      {(users || []).map((user) => (
        <li
          onClick={() => {
            setChosenPlayer(user);
          }}
          key={user.username}
          className="flex hover:bg-gray-700 justify-between gap-x-6 p-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <Image
              className="h-12 w-12 flex-none rounded-full dark:bg-gray-950 bg-gray-50"
              src={user.image || avatarSvg}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 dark:text-gray-100 text-gray-900">
                {user.username}
              </p>
              <p className="mt-1 truncate text-xs leading-5 dark:text-gray-200 text-gray-500">
                {user.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 dark:text-gray-100 text-gray-900">{user.role}</p>
            {user.isOnline ? (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full  bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            ) : (
              <p className="mt-1 text-xs leading-5 dark:text-gray-200 text-gray-500">
                Last seen: <time dateTime={user}>{user.lastSeen.toLocaleString()}</time>
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
