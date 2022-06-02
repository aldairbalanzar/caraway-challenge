import React from 'react'

function Card({ product }) {
    const {
        title,
        subTitle,
        ingredients,
        buyNowPrice,
        subscribePrice,
        bgImgSrc,
        bgImgAlt,
        productImgSrc,
        productImgAlt,
        theme
    } = product

    let ingredientsString = ingredients.join(', ')
    
    return (
    <article className='product-card'>
        <div className="img-container">
            <div className={`card-bar ${theme}`}></div>
            <img src={bgImgSrc} alt={bgImgAlt} className='bg-img' />
            <img src={productImgSrc} alt={productImgAlt} className='product-img' />
        </div>

        <div className="product-details-container">
            <h3 className='product-title'>{title}</h3>
            <h5 className='product-subtitle'>{subTitle}*</h5>
            <div className='ingredient-list'>
                <p><i className='font-bold'>Key Ingredients: </i>{ingredientsString} </p>
            </div>
        </div>
        
        <div className="card-btn-container">
            <button className='card-btn buy-now-btn'>Add to cart <hr className='btn-hr'/> ${buyNowPrice}</button>
            <button className={`card-btn subscribe-btn ${theme}`}>
                <span className="material-symbols-outlined btn-icon">info</span>
                Subscribe <hr className='btn-hr'/> ${subscribePrice}
            </button>
        </div>
    </article>
  )
}

export default Card