'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
const SignInForm = () => {
  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setValue('email', '', { shouldValidate: true });
    setValue('password', '', { shouldValidate: true });
    const { email, password } = data;
    try {
      // ('use server');
      const res = await signIn('credentials', { email, password, redirect: false });
      if (res?.error) console.log(res);
      else router.replace('/contact');
    } catch (error) {
      console.log('error logging in');
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4 dark:text-white">Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid emaild address',
                },
              })}
              className="mt-1 p-2 w-full rounded-md border"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required', minLength: 4 })}
              className="mt-1 p-2 w-full rounded-md border"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center dark:text-gray-300">
          <a href="/signup" className="text-blue-500 dark:text-blue-400 hover:underline">
            Don&apos;t have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignInForm;
