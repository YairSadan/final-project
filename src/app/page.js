'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'authenticated') router.push('/contact');
  router.push('/login');
}
