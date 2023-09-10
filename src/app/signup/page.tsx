import { redirect } from 'next/navigation';
import SignUpForm from '@/components/LoginRegisterScreen/SignUpForm';
import getSession from '@/actions/getSession';

const Login = async () => {
  const session = await getSession();
  if (session) redirect('/contact');
  return <SignUpForm />;
};

export default Login;
