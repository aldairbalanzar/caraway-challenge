import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'

function Category({ category, categoryItems, handleCurrentItem }) {
    const [currentItems, setCurrentItems] = useState([])
    const [count, setCount] = useState(13)

    const addMoreCurrentItems = () => {
        setCount(count + 12)
    }

    useEffect(() => {
        setCurrentItems([...categoryItems.slice(1, count)])
    }, [count, categoryItems])

  return (
    <div className='category-container'>
        <h3 className="category-title">{category}</h3>
        <div className="items-container">
            {currentItems.map((item, i) => {
                return <ItemCard key={i} item={item} handleCurrentItem={handleCurrentItem}/>
        })}
        </div>
        <div className="items-btn-container">
            <button onClick={addMoreCurrentItems} className="more-items-btn">View More Items</button>
        </div>
    </div>
  )
}

export default Category