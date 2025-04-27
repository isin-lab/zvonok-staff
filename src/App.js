import React, { useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	Link,
	useNavigate,
	Navigate,
} from 'react-router-dom'
import { stations, stationCategories } from './data/stations'
import { dishes } from './data/dishes'
import DishCard from './components/DishCard'
import { FiArrowLeft, FiHome } from 'react-icons/fi'
import { useDebounce } from 'use-debounce'
import { FaTelegramPlane, FaVk } from 'react-icons/fa'
import LOGO from '../src/zvonokLogo.svg'
import RS from '../src/rs.svg'

const Layout = ({ children, currentCategory }) => {
	return (
		<div className='app-container'>
			<header className='header'>
				<div className='header-content'>
					<Link className='linkLogo' to='/zvonok-staff'>
						<img src={LOGO} alt='ЗВОНОК' className='logo-image' />
					</Link>
				</div>
			</header>
			<div className='main-content'>{children}</div>
			<Footer />
		</div>
	)
}

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='social-links'>
				<a
					href='https://t.me/+R5ZhQuSi31w5NGIy'
					target='_blank'
					rel='noopener noreferrer'
					className='social-link'
				>
					<FaTelegramPlane className='telegram' />
				</a>
				<a
					href='https://vk.com/zvonok_spb'
					target='_blank'
					rel='noopener noreferrer'
					className='social-link'
				>
					<FaVk className='vk' />
				</a>
				<a
					href='https://t.me/resto_say'
					target='_blank'
					rel='noopener noreferrer'
					className='social-link'
				>
					<img src={RS} alt='RS' className='social-icon custom-icon' />
				</a>
			</div>
		</footer>
	)
}

const CategoryPage = () => {
	const { categoryId } = useParams()
	const navigate = useNavigate()
	const [searchQuery, setSearchQuery] = useState('')
	const [debouncedQuery] = useDebounce(searchQuery, 300)

	const category = stationCategories.find(c => c.id === categoryId)
	if (!category) return <Navigate to='/zvonok-staff' />

	const categoryStations = stations.filter(s =>
		category.stations.includes(s.id)
	)
	const filteredDishes = Object.values(dishes).filter(
		dish =>
			dish.name.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
			category.stations.includes(dish.station)
	)

	return (
		<Layout currentCategory={category}>
			<div className='category-page'>
				<div className='category-header'>

					<div className='search-container'>
						<div className='search-wrapper'>
							<input
								type='text'
								placeholder='Поиск блюда...'
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
								className='search-input'
							/>
						</div>
					</div>

					<div className='category-icon-container'>
						{React.cloneElement(category.icon, { color: 'white' })}
					</div>
				</div>

				<div className='stations-section'>
					{searchQuery ? (
						<div className='search-results'>
							{filteredDishes.length > 0 ? (
								filteredDishes.map(dish => (
									<DishCard key={dish.id} dish={dish} isExpanded={false} />
								))
							) : (
								<p className='no-results'>Ничего не найдено</p>
							)}
						</div>
					) : (
						<div className='station-buttons'>
							{categoryStations.map(station => (
								<Link
									key={station.id}
									to={`/station/${station.id}`}
									className='station-button'
								>
									{station.name}
								</Link>
							))}
						</div>
					)}
				</div>

				<div className='navigation-buttons'>
					<button
						onClick={() => navigate('/zvonok-staff')}
						className='nav-button back-button'
					>
						<FiArrowLeft /> Назад
					</button>
				</div>
			</div>
		</Layout>
	)
}

const HomePage = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [debouncedQuery] = useDebounce(searchQuery, 300)
	const filteredDishes = Object.values(dishes).filter(dish =>
		dish.name.toLowerCase().includes(debouncedQuery.toLowerCase())
	)

	return (
		<Layout>
			<div className='home-page'>
				<div className='search-container'>
					<div className='search-wrapper'>
						<input
							type='text'
							placeholder='Поиск блюда...'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							className='search-input'
						/>
					</div>
				</div>

				{searchQuery ? (
					<div className='search-results'>
						{filteredDishes.length > 0 ? (
							filteredDishes.map(dish => (
								<DishCard key={dish.id} dish={dish} isExpanded={false} />
							))
						) : (
							<p className='no-results'>Ничего не найдено</p>
						)}
					</div>
				) : (
					<div className='category-buttons'>
						{stationCategories.map(category => (
							<Link
								key={category.id}
								to={`/category/${category.id}`}
								className='category-button'
							>
								<div className='category-icon'>{category.icon}</div>
								<div className='category-name'>{category.name}</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</Layout>
	)
}

const StationPage = () => {
	const { stationId } = useParams()
	const navigate = useNavigate()
	const stationDishes = Object.values(dishes).filter(
		dish => dish.station === stationId
	)
	const station = stations.find(s => s.id === stationId)
	const category = stationCategories.find(c => c.stations.includes(stationId))

	return (
		<Layout>
			<div className='station-page' style={{ padding: '0 10px' }}>
			

				{station && <h2 className='station-title'>{station.name}</h2>}

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
						<FiArrowLeft /> Назад
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
			<div className='dish-page' style={{ padding: '0 10px' }}>
				{dish && <DishCard dish={dish} isExpanded={true} />}

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

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/zvonok-staff' element={<HomePage />} />
				<Route path='/category/:categoryId' element={<CategoryPage />} />
				<Route path='/station/:stationId' element={<StationPage />} />
				<Route path='/dish/:dishId' element={<DishPage />} />
				<Route path='*' element={<Navigate to='/zvonok-staff' />} />
			</Routes>
		</Router>
	)
}

export default App
