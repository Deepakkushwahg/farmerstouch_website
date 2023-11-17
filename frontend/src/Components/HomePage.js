import React from 'react'
import '../Constant/HomePage.css'
import NavBar from './NavBar'
import Footer from './Footer'
import FeedBackForm from './FeedBackForm'

export default function HomePage() {
  
  return (
    <div>
        <NavBar/>
        <div id="offersBox">Offers</div>
        <div id="container">
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
          <button className="item"></button>
        </div>
        <FeedBackForm/>
        <Footer/>
    </div>
  )
}
