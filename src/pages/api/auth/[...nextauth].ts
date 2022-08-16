import request from 'graphql-request'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { useLoginMutation } from '../../../generated/graphql'

const LOGIN_AUTH = `mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    email
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    apiToken
  }
}`

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials: any) {
				try {
					const res = await request('https://apicajabamba.plazaticket.com/public/graphql', LOGIN_AUTH, {
						input: {
							email: credentials.email,
							password: credentials.password
						}
					})

					if (res?.Login) {
						return res?.Login
					}
					console.log('res', res)
				} catch (error: any) {
					console.log('res', error)
					throw new Error(error.response.errors[0].debugMessage)
				}
			}
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: 30 * 24 * 60 * 60, // 30 days
		strategy: 'jwt'
	},
	callbacks: {
		async session({ session, token }: any) {
			session.user = token.user
			return session
		},
		async jwt({ token, user }: any) {
			if (user) {
				token.user = user
			}
			return token
		}
	}
})
