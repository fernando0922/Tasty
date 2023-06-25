import { useEffect, useState } from "react";
import "./SearchCategoryItem.css";
import { NavLink } from "react-router-dom";
const SearchCategoryItem = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const shortMeal = props.meal.strMeal.slice(0, 9) + '...'
  const longMeal = props.meal.strMeal

  return (
    <NavLink className='product-item-link' to={`/detail/${props.meal.idMeal}`}>
    <article className='search-category-item'>
      <div className='categoryImageBox'>
        <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
      </div>
    <div className='meal-name-wrapper'>
        <p className='meal-name-category' style={isMobile ? { display: 'flex' } : { display: 'none' }}>{shortMeal}</p>
        <p className='meal-name-category' style={!isMobile ? { display: 'flex' } : { display: 'none' }}>{longMeal}</p>
    </div>
    </article>
    </NavLink>
  )
}

export default SearchCategoryItem;
