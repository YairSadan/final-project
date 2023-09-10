import { redirect } from 'next/navigation';
import SignInForm from '@/components/LoginRegisterScreen/SignInForm';
import getSession from '@/actions/getSession';

const Login = async () => {
  const session = await getSession();
  if (session) redirect('/contact');
  return <SignInForm />;
};

export default Login;
