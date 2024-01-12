import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"

export const handlerOption = {
  providers: [
    githubAuth({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(handlerOption)

export { handler as GET, handler as POST }
