import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: '3a73da80dabfe499b82d',
      clientSecret: '906c0fc830f834bff87aa7660a7d52bef63a901c',
    }),
  ],
});
