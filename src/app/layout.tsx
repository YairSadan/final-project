import './globals.css';
import { Inter } from 'next/font/google';
import AuthContext from '@/Providers/AuthProvider';
import SafeRouteProvider from '@/Providers/SafeRouteProvider';
import { Metadata } from 'next';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col max-h-screen min-h-screen justify-between flex-auto`}
      >
        <AuthContext>
          <SafeRouteProvider>
            <main>{children}</main>
          </SafeRouteProvider>
        </AuthContext>
      </body>
    </html>
  );
}
