import React, { useState } from 'react'

function ItemCard({ item, handleCurrentItem }) {
    const [count, setCount] = useState(0)
    const handleCount = num => {
      setCount(count + num)
    }

  return (
    <article className='item-card'>
        <div className={item.isNew ? 'new-item' : 'hidden'}>NEW</div>
        <img src={item.images[count || 0].src} alt=''className='item-img'
        onClick={() => {handleCurrentItem(item)}} 
        onMouseEnter={() => {handleCount(1)}} 
        onMouseLeave={() => {handleCount(-1)}}
        />

        <div className="item-details-container">
            <h3 className='item-title'>{item.newTitle}</h3>
            <h5 className="item-price">${item.variants[0].price}</h5>
            <h5 className='item-color'>{item.itemColor}</h5>
            <p className='item-variants-detail'>
              {item.itemStyles.length > 1 ? `${item.itemStyles.length} Styles Available` : `${item.itemStyles.length} Style Available`}
            </p>
        </div>
    </article>
  )
}

export default ItemCard