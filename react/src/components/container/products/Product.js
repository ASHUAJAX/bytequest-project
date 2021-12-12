import React from 'react';
import "./Product.css";
import ProductCard from './productCard/ProductCard';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function Product() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        initialSlide: 1,
        
      };

      let count=1;
      let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p, i) => (
       <ProductCard count={count++} />
      )
      );
    return (
        <div>
            <h2 className='Prod-heading1'>lorem ipsum dolor</h2>
            <h1 className='Prod-heading2'>Products</h1>

            <Slider {...settings}>
{
    cards
}

            </Slider>
           
        </div>
    )
}
