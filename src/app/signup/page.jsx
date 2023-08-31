import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import SignUpForm from '@/components/LoginRegisterScreen/LoginForm/SignUpForm';

const Login = async () => {
  const session = await getServerSession(options);
  if (session) redirect('/contact');
  return <SignUpForm />;
};

export default Login;
