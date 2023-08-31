import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import SignInForm from '@/components/LoginRegisterScreen/LoginForm/SignInForm';

const Login = async () => {
  const session = await getServerSession(options);
  if (session) redirect('/contact');
  return <SignInForm />;
};

export default Login;
