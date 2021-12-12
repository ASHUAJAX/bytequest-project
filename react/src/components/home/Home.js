import React from 'react'
import Header from '../shared/header/Header';
import Banner from "../container/banner/Banner"
import Product from '../container/products/Product';
import Services from '../container/services/Services';
import HomeSection from '../container/homeSection/HomeSection';
import Subscribe from '../container/subscribe/Subscribe';
import Footer from '../shared/footer/Footer';
import "./Home.css"

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Product/>
            <Services/>
            <HomeSection heading1="lorem ipsum dolor" heading2="Portfolio/ Case Studies" />
            <HomeSection heading1="lorem ipsum dolor" heading2="Developers On Demand" />
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Home
