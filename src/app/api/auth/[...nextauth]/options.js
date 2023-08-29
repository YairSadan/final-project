import User from '@/models/User';
import connect from '@/utils/db';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
export const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { name, password } = credentials;
        try {
          await connect();
          const user = await User.findOne({ name });
          if (!user) return null;
          const isPasswordCorrect = await bcrypt.compare(password, user.password);
          if (!isPasswordCorrect) return null;
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
    error: '/',
  },
};
