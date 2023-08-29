'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import WrongDetailsModal from '../WrongDetailsModal/WrongDetailsModal';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
const LoginForm = () => {
  const [err, setErr] = useState(false);
  const [obj, setObj] = useState({});
  const router = useRouter();
  const handleSubmit = async (name, password) => {
    setObj({ name, password });
    try {
      const res = await signIn('credentials', { name, password, redirect: false });
      if (res.error) {
        setErr(true);
        return;
      }
      router.replace('contact');
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <Formik
        initialValues={{ name: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.password) errors.password = 'Required';
          else if (values.password.length < 4)
            errors.password = 'Must be longer than four characters';
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values.name, values.password);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <div className="flex justify-center">
            <form
              className="bg-white dark:bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Username"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <div className="flex items-center justify-around">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
              </div>
              <WrongDetailsModal open={err} setOpen={setErr} details={obj} />
            </form>
          </div>
        )}
      </Formik>
  );
};

export default LoginForm;
