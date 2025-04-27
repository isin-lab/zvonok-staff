// src/data/stations.js
import { GiCook, GiMartini } from 'react-icons/gi'

export const stations = [
	{ id: 'station1', name: 'Раздача' },
	{ id: 'station2', name: 'Горячий цех' },
	{ id: 'station3', name: 'Холодный цех' },
	{ id: 'station4', name: 'Полуфабрикаты' },
	{ id: 'station5', name: 'Настойки' },
	{ id: 'station6', name: 'Коктейли' },
	{ id: 'station7', name: 'Заготовки бар' },
	{ id: 'station8', name: 'Спецпредложение' },
]

// Добавляем экспорт stationCategories
export const stationCategories = [
	{
		id: 'kitchen',
		name: 'Кухня',
		icon: <GiCook size={32} />,
		stations: ['station1', 'station2', 'station3', 'station4'],
	},
	{
		id: 'bar',
		name: 'Бар',
		icon: <GiMartini size={32} />,
		stations: ['station5', 'station6', 'station7', 'station8'],
	},
]
