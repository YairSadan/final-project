'use client';
import avatarSvg from '../../../../public/avatar.svg';
import Image from 'next/image';

const OfflineContacts = ({ users , setChosenUser}) => {
  return (
<ul
  role="list"
  className="divide-y divide-opacity-50 overflow-scroll px-40 bg-white dark:bg-gray-900 dark:divide-gray-700"
>
  {users.map((user) => (
    <li
      onClick={() => {
        setChosenUser(user);
      }}
      key={user.email}
      className="flex hover:bg-gray-200 dark:hover:bg-gray-800 justify-between gap-x-6 p-5 cursor-pointer transition duration-300 ease-in-out"
    >
      <div className="flex min-w-0 gap-x-4">
        <Image
          className="h-12 w-12 flex-none rounded-full bg-gray-200 dark:bg-gray-800"
          src={!user.image && avatarSvg}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            {user.username}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900 dark:text-gray-100">{user.role}</p>
        {user.lastSeen ? (
          <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
            Last seen <time dateTime={user.lastSeenDateTime}>{user.lastSeen.toLocaleString()}</time>
          </p>
        ) : (
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">Online</p>
          </div>
        )}
      </div>
    </li>
  ))}
</ul>

  );
};

export default OfflineContacts;
