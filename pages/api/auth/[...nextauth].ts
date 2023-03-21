import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (
        account?.provider === "google" &&
        (profile as any)?.email_verified &&
        profile?.email?.endsWith("@" + process.env.ALLOWED_GOOGLE_DOMAIN)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});
