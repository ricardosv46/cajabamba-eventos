import { useGetAllBloquesQuery } from '../generated/graphql'

// Obtenemos todas los bloques
export const useBloques = (input = { feriaId: 1, tendido: 'T1' }) => {
	const { data, loading, refetch } = useGetAllBloquesQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})

	const bloques = data?.GetAllBloques ?? []

	return {
		loading,
		bloques,
		refetch
	}
}
