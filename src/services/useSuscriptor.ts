import { useCreateSuscriptorMutation } from '../generated/graphql'

interface IUseSuscriptor {
  email: string
  nombres: string
}

export const useSuscriptor = () => {
  const [CreateSuscriptor, { loading }] = useCreateSuscriptorMutation()

  const createSuscriptor = async ({ email, nombres }: IUseSuscriptor) => {
    try {
      const res = await CreateSuscriptor({
        variables: {
          input: {
            email,
            nombres
          }
        }
      })

      if (res?.data?.CreateSuscriptor) {
        return { ok: true }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }
  return {
    loading,
    createSuscriptor
  }
}
