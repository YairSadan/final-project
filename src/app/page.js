import Contact from './contact/page';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/dist/server/api-utils';
import LoginForm from '@/components/LoginForm/LoginForm';

export default async function Home() {
  const session = await getServerSession(options);
  if (session) redirect('/contact');
  return <LoginForm />;
}
