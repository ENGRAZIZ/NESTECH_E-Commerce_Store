import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>
      
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      
      <VerticalCardProduct category={"laptops"} heading={"Laptops"}/>

      <VerticalCardProduct category={"fashions"} heading={"Fachions"}/>

      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      
      <VerticalCardProduct category={"earphones"} heading={"Gaming Earphones"}/>
      
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>

      
      
    
    
    </div>
  )
}

export default Home