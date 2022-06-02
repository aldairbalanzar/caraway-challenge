import React from 'react'

function Thumbnails({ currentStyles, setCurrentItem }) {

  return (
    <div className="styles-container">
        {currentStyles.map(item => {
            return <img key={item.id}
            className='styles-thumbnail'
            src={item.images[0].src}
            onClick={() => {setCurrentItem(item)}}
            alt={item.newTitle}/>
        })}
    </div>
  )
}

export default Thumbnails