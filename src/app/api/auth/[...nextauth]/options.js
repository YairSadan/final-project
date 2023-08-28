import User from '@/models/User';
import connect from '@/utils/db';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
export const options = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();
        const user = await User.findOne({ name: credentials.name });
        if (user) {
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
          if (isPasswordCorrect) return user;
          throw new Error('Wrong password');
        } else throw new Error('User not found');
      },
    }),
  ],
  pages: {
    error: '/'
  },
};
