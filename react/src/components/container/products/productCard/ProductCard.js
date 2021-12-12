import React from 'react'
import "./productCard.css"

function ProductCard(props) {
 
    return (
        <div className='product-card'>
          <h1 className='product-card-Info'>{
                props.count
            }
            </h1> 
        </div>
    )
}

export default ProductCard;
