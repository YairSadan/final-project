'use client';
import Footer from '@/components/Layout/Footer/Footer';
import Header from '@/components/Layout/Header/Header';
import { usePathname } from 'next/navigation';

export default function SafeRouteProvider({ children }) {
  const pathname = usePathname();
  const nonLayoutPage = /^\/chat/.test(pathname) || /^\/backgammon/.test(pathname)
  return (
    <>
      {!nonLayoutPage && <Header />}
      {children}
      {!nonLayoutPage && <Footer />}
    </>
  );
}
