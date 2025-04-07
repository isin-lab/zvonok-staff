import React from 'react'

const StationButton = ({ station, onClick }) => {
	return (
		<button onClick={() => onClick(station.id)} className='station-button'>
			{station.name}
		</button>
	)
}

export default StationButton
