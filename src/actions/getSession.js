import { getServerSession } from 'next-auth';
import { options } from '@/app/api/(login)/auth/[...nextauth]/options';
export default async function getSession() {
  return await getServerSession(options);
}
