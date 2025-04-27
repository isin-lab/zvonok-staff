// src/components/DishCard.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const DishCard = ({
	dish,
	isExpanded: initialExpanded = false,
	isSearchResult = false,
}) => {
	const [isExpanded, setIsExpanded] = useState(initialExpanded)

	return (
		<div
			className={`dish-card ${isExpanded ? 'expanded' : 'collapsed'} ${
				isSearchResult ? 'search-result' : ''
			}`}
		>
			<div className='dish-header' onClick={() => setIsExpanded(!isExpanded)}>
				<h3>{dish.name}</h3>
				<span className='toggle-icon'>
					{isExpanded ? <FiChevronUp /> : <FiChevronDown />}
				</span>
			</div>

			{isExpanded && (
				<div className='dish-content'>
					{dish.image && (
						<img
							src={dish.image}
							alt={dish.name}
							className='dish-image'
							style={{ maxWidth: '100%' }}
						/>
					)}

					<div className='ingredients-container'>
						{dish.ingredients.map((ingredient, index) => (
							<div key={index} className='ingredient-row'>
								<span className='ingredient-name'>
									{ingredient.isDish ? (
										<Link
											to={`/dish/${ingredient.dishId}`}
											className='dish-link'
										>
											{ingredient.name}
										</Link>
									) : (
										ingredient.name
									)}
								</span>
								<span className='ingredient-weight'>{ingredient.weight}</span>
							</div>
						))}
					</div>

					{dish.preparation && (
						<div className='preparation'>
							<h4>Приготовление:</h4>
							<p>{dish.preparation}</p>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default DishCard