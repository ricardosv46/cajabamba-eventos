export const gentituloButacas = (id: string) => {
	let titulo: string = ''
	if (id === 'T1P') {
		titulo = 'Tendido 1 PAR'
	}
	if (id === 'T1I') {
		titulo = 'Tendido 1 IMPAR'
	}

	if (id === 'T2P') {
		titulo = 'Tendido 2 PAR'
	}
	if (id === 'T2I') {
		titulo = 'Tendido 2 IMPAR'
	}
	if (id === 'T3P') {
		titulo = 'Tendido 3 PAR'
	}
	if (id === 'T3I') {
		titulo = 'Tendido 3 IMPAR'
	}
	if (id === 'T4P') {
		titulo = 'Tendido 4 PAR'
	}
	if (id === 'T4I') {
		titulo = 'Tendido 4 IMPAR'
	}

	return titulo
}
