import { useGetAllAsientosQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const useAsientosEventos = (input = { eventoId: 1, tendido: 'T1' }) => {
	const { data, loading, refetch } = useGetAllAsientosQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		},
		pollInterval: 1000
	})

	const asientos = data?.GetAllAsientos ?? []

	return {
		loading,
		asientos,
		refetch
	}
}
