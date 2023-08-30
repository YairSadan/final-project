import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function Home() {
  try {
    const session = await getServerSession(options);

    // Redirect based on the presence of a session
    if (session) {
      redirect('/contact');
    } else {
      redirect('/login');
    }
  } catch (error) {
    console.error("An error occurred while fetching the session:", error);
    redirect('/error');
  }
}
