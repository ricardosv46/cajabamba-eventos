import { useLoginMutation } from '../generated/graphql'

interface IUseLogin {
  email: string
  password: string
}

export const useLogin = () => {
  const [LoginUsuario, { loading: loadingLogin }] = useLoginMutation()

  const loginUsuario = async ({ email, password }: IUseLogin) => {
    try {
      const res = await LoginUsuario({
        variables: {
          input: {
            email,
            password
          }
        }
      })

      if (res.data?.Login?.apiToken) {
        return { ok: true, data: res.data?.Login }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }
  return {
    loadingLogin,
    loginUsuario
  }
}
