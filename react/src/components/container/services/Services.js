import React from 'react'
import ServiceCard from "./servicesCard/ServicesCard";
import "./services.css"

import Slider2 from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function Services() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        initialSlide: 1,
      };

     


      let services=[
          {
              title:"Website Design & Development",
              desc:"Ipsum passages, and more recently with desktop publishing software"
          },
          {
            title:"On Demand Devs",
            desc:"Ipsum passages, and more recently with desktop publishing software"
        },
        {
            title:"Webhosting",
            desc:"Ipsum passages, and more recently with desktop publishing software"
        },
        {
            title:"Website Design & Development",
            desc:"Ipsum passages, and more recently with desktop publishing software"
        },
        {
            title:"Website Design & Development",
            desc:"Ipsum passages, and more recently with desktop publishing software"
        },
      ]

      let cards = services.map((p, i) => (
       <ServiceCard content={p} />
      )
      );

    return (
        <div>
           <div>
            <h2 className='services-heading1'>lorem ipsum dolor</h2>
            <h1 className='services-heading2'>Services</h1>

            <Slider2 {...settings} className='product-slider'>
{
    cards
}

            </Slider2>
           
        </div>
        </div>
    )
}
