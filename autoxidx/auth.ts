import NextAuth, { Profile } from "next-auth"
import { OIDCConfig } from "next-auth/providers";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"

export const { handlers, auth, signIn, signOut } = NextAuth({
  session : {
    strategy: 'jwt'
  },
  providers: [
    DuendeIDS6Provider({
      id: 'id-server',
      clientId: "front",
      clientSecret: "secret",
      issuer: "http://localhost:6001",
      authorization: {
      params: {
        scope: 'openid profile auctionApp' 
        // code_challenge_method: 'S256',
      },
},
      idToken: true,
    } as OIDCConfig<Omit<Profile , 'username'>>),
  ],
  callbacks: {
    async authorized({auth}){
      return !!auth
    },
    async jwt({token , profile ,account}){
      if(account && account.access_token){
        token.accessToken = account.access_token;
      }
      if(profile){
        token.username = profile.username
      }
      return token
    },
    async session({token , session}){
      if(token){
        session.user.username = token.username;
        session.accessToken = token.accessToken;
      }
      return session
    }
  }
});
