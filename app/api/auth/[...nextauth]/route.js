import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000,
      },
    })
  ],
  httpOptions: {
    timeout: 10000,
  },
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          // Generate a valid 8-20 character alphanumeric username
          let username = (profile.name || profile.email.split('@')[0])
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();
          
          if (username.length < 8) {
            username = (username + "12345678").slice(0, 8);
          } else if (username.length > 20) {
            username = username.slice(0, 20);
          }

          await User.create({
            email: profile.email,
            username: username,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false;
      }
    },
  }
})

export { handler as GET, handler as POST }
