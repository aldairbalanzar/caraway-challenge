import React from 'react'

function ItemDashboard({ currentItem, setIsViewingItem, setCurrentItem }) {
    const {
        images,
        newTitle,
        itemStyles,
        id
    } = currentItem

  return (
    <div className='item-dashboard'>
        <img src={images[0].src} alt={newTitle} className='dashboard-img'/>
        <div className="dashboard-details">
            <h3 className="dashboard-item-name">{newTitle}</h3>
        </div>
        <div className="styles-container">
            {itemStyles.map(item => {
                return <img key={id}
                className='styles-thumbnail'
                src={item.images[0].src}
                onClick={() => {setCurrentItem(item)}}
                alt={item.newTitle}/>
            })}
        </div>
        <button 
        className='close-btn'
        onClick={() => {setIsViewingItem(false)}}
        >Close</button>
    </div>
  )
}

export default ItemDashboard