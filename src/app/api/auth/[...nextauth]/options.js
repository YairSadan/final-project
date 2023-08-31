import connect from '@/utils/db';
import prisma from '@/utils/prismadb';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
export const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          await connect();
          const user = await prisma.user.findUnique({
            where: {
              name: credentials.name,
            },
          });
          if (!user) return null;
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordCorrect) return null;
          return user;
        } catch (error) {
          console.log('error while sign in' + error);
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
  debug: process.env.NODE_ENV === 'development',
};
