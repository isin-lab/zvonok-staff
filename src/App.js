import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	Link,
	useNavigate,
	Navigate,
} from 'react-router-dom'
import { stations } from './data/stations'
import { dishes } from './data/dishes'
import DishCard from './components/DishCard'
import { FiArrowLeft, FiHome } from 'react-icons/fi'

const Layout = ({ children }) => {
	return (
		<div className='app-container'>
			<header className='header'>
				<Link className='linkLogo' to='/zvonok-staff'>
					<div className='logo'>ЗВОНОК</div>
				</Link>
			</header>
			<div className='main-content'>{children}</div>
		</div>
	)
}

const StationPage = () => {
	const { stationId } = useParams()
	const navigate = useNavigate()
	const stationDishes = Object.values(dishes).filter(
		dish => dish.station === stationId
	)
	const station = stations.find(s => s.id === stationId)

	return (
		<Layout>
			<div className='station-page'>
				{station && <h1 className='station-title'>{station.name}</h1>}

				{stationDishes.length > 0 ? (
					<div className='dishes-list'>
						{stationDishes.map(dish => (
							<DishCard key={dish.id} dish={dish} isExpanded={false} />
						))}
					</div>
				) : (
					<p>Нет блюд для этой станции</p>
				)}

				<div className='navigation-buttons'>
					<button
						onClick={() => navigate(-1)}
						className='nav-button back-button'
					>
						<FiArrowLeft /> 
					</button>
					<Link to='/zvonok-staff' className='nav-button home-button'>
						<FiHome />
					</Link>
				</div>
			</div>
		</Layout>
	)
}

const DishPage = () => {
	const { dishId } = useParams()
	const navigate = useNavigate()
	const dish = dishes[dishId]

	return (
		<Layout>
			<div className='dish-page'>
				{dish && (<DishCard dish={dish} isExpanded={true} />)}

				<div className='navigation-buttons'>
					<button
						onClick={() => navigate(-1)}
						className='nav-button back-button'
					>
						<FiArrowLeft />
					</button>
					<Link to='/zvonok-staff' className='nav-button home-button'>
						<FiHome />
					</Link>
				</div>
			</div>
		</Layout>
	)
}

const HomePage = () => {
	return (
		<Layout>
			<div className='home-page'>
				<h1 className='titleHomePage'>Выберите рабочую станцию</h1>
				<div className='station-buttons'>
					{stations.map(station => (
						<Link
							key={station.id}
							to={`/station/${station.id}`}
							className='station-button'
						>
							{station.name}
						</Link>
					))}
				</div>
			</div>
		</Layout>
	)
}

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/zvonok-staff' element={<HomePage />} />
				<Route path='/station/:stationId' element={<StationPage />} />
				<Route path='/dish/:dishId' element={<DishPage />} />
				<Route path='*' element={<Navigate to='/zvonok-staff' />} />
			</Routes>
		</Router>
	)
}

export default App