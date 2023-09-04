import prisma from '@/lib/prismadb';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
export const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user) return null;
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.hashedPassword);
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
  debug: process.env.NODE_ENV === 'development',
};
