import React from 'react'
import "./ServicesCard.css"

function ServicesCard(props) {
    return (
      <>
          <div className="services-card" >
  <img className="card-img-top " src="" alt=""/>
  <div className="card-body  text-center">
    <h3 className="services-card-title">{props.content.title}</h3>
    <p className="services-card-text">{props.content.desc}</p>
    
  </div>
  
</div>
<div className="services-btn-container">
<button className="services-btn">Read More</button>
</div>

</>
    )
}

export default ServicesCard
