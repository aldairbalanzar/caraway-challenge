import React, { useState, useEffect } from 'react'
import Thumbnails from './Thumbnails'

function ItemDashboard({ currentItem, setIsViewingItem, setCurrentItem }) {
    const [currentStyles, setCurrentStyles] = useState([])

    const {
        images,
        newTitle,
    } = currentItem

    useEffect(() => {
        setCurrentStyles([...currentItem.itemStyles])
    }, [currentItem])

  return (
    <div className='item-dashboard'>
        <img src={images[0].src} alt={newTitle} className='dashboard-img'/>
        <div className="dashboard-details">
            <h3 className="dashboard-item-name">{newTitle}</h3>
        </div>

        <Thumbnails currentStyles={currentStyles} setCurrentItem={setCurrentItem} />

        <button 
        className='close-btn'
        onClick={() => {setIsViewingItem(false)}}
        >Close</button>
    </div>
  )
}

export default ItemDashboard