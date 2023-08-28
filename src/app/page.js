import Contact from './contact/page';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import Login from './login/page';

export default async function Home() {
  const session = await getServerSession(options);
  return <>{session ? <Contact /> : <Login/>}</>;
}
