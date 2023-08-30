'use client';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';

export default function SafeRouteProvider({ children }) {
  const pathname = usePathname();
  const endsWithChat = /^\/.*\/chat$/.test(pathname);
  return (
    <>
      {!endsWithChat && <Header />}
      {children}
      {!endsWithChat && <Footer />}
    </>
  );
}
