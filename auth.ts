import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import MicrosoftProvider from "next-auth/providers/microsoft"
import GithubProvider from "next-auth/providers/github"
// import EmailProvider from "next-auth/providers/email"

export const authOptions: any = {
  secret: process.env.AUTH_SECRET ?? "",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // MicrosoftProvider({
    //   clientId: process.env.MICROSOFT_CLIENT_ID!,
    //   clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD!,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }: any) {
      if (account && profile) {
        token.provider = account.provider
        token.email = (profile as any).email
        token.name = (profile as any).name
        token.picture = (profile as any).picture
      }
      return token
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.email = token.email as string | undefined
        session.user.name = token.name as string | undefined
        session.user.image = token.picture as string | undefined
      }
      ;(session as any).provider = token.provider
      return session
    }
  },
  // You can customize the session here if needed
  // pages: {
  //   signIn: "/signin",
  // },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
