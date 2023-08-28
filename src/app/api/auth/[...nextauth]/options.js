import User from '@/models/User';
import connect from '@/utils/db';
import CredentialsProvider from 'next-auth/providers/credentials';
export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        await connect();
        const user = await User.findOne({ name: credentials.name });
        if (user) {
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
          isPasswordCorrect ? user : null;
        } else return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
