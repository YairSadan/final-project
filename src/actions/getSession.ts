import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/(login)/auth/[...nextauth]/options';
export default async function getSession() {
  return await getServerSession(authOptions);
}
