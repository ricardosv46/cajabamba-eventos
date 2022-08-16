export const genNombreFilas = (id: string) => {
	let nombreFilas: string[] = []
	if (id === 'T1P') {
		nombreFilas = [
			'F12',
			'F11',
			'F10',
			'F09',
			'F08',
			'F07',
			'F06',
			'F05',
			'F04',
			'F03',
			'F02',
			'F01',
			'PREFERENCIAL 01',
			'PREFERENCIAL 02'
		]
	}
	if (id === 'T1I') {
		nombreFilas = [
			'F12',
			'F11',
			'F10',
			'F09',
			'F08',
			'F07',
			'F06',
			'F05',
			'F04',
			'F03',
			'F02',
			'F01',
			'PREFERENCIAL 01',
			'PREFERENCIAL 02'
		]
	}

	if (id === 'T2P') {
		nombreFilas = [
			'F12',
			'F11',
			'F10',
			'F09',
			'F08',
			'F07',
			'F06',
			'F05',
			'F04',
			'F03',
			'F02',
			'F01',
			'PREFERENCIAL 01',
			'PREFERENCIAL 02'
		]
	}
	if (id === 'T3') {
		nombreFilas = ['F17', 'F16', 'F15', 'F14', 'F13', 'F12', 'F11', 'F10', 'F09', 'F08', 'F07', 'F06', 'F05', 'F04']
	}
	if (id === 'T3A') {
		nombreFilas = ['F03', 'CONTRA BARRERA', 'BARRERA']
	}
	if (id === 'T3B') {
		nombreFilas = ['F03', 'CONTRA BARRERA', 'BARRERA']
	}

	return nombreFilas
}
