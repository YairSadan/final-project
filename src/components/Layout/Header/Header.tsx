'use client';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CursorArrowRaysIcon,
  XMarkIcon,
  MinusIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  BarsArrowDownIcon,
} from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';

const actions = [
  {
    name: 'Connect',
    description: 'Get online so your contacts will know you are here',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Actions',
    description: 'TODO: add play game and send message',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Help',
    description: 'TODO add a link to backgammon rules and add href to about page',
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
];

const Header = () => {
  const {status} = useSession();
  return (
  
    <header className="bg-white/70 shadow dark:bg-gray-800">
      <nav className="mx-auto flex max-w-9xl items-center justify-between p-6 lg:px-8">
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <BarsArrowDownIcon className="h-9 w-9" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {actions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="text-2xl font-bold leading-6 dark:text-gray-100 text-gray-800">Sela TalkBack</div>
        <div className="flex gap-x-3">
          {status === 'authenticated' && <button onClick={() => signOut()}>Log out</button>}
          <button>
            <MinusIcon className="h-9 w-9"></MinusIcon>
          </button>
          <button>
            <XMarkIcon className="h-9 w-9"></XMarkIcon>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// TODO add a phone compatability
{
  /*
          <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
 <Dialog as="div" className="lg" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  <div className="fixed inset-0 z-10" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <Disclosure as="div" className="-mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Menu
                  <ChevronDownIcon
                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                  {[...actions].map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            About
          </a>
        </div>
      </div>
    </div>
  </Dialog.Panel>
</Dialog> */
}
