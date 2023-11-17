import React from 'react'
import '../Constant/Footer.css'
import facebook from '../Constant/facebook.png'
import instagram from '../Constant/instagram.png'
import twitter from '../Constant/twitter.png'
import youtube from '../Constant/youtube.png'
import playstore from '../Constant/playstore.png'
import appstore from '../Constant/appstore.png'
import hindiText from '../Constant/hindiText.png'

export default function Footer() {
  return (
    <div>
      <footer>
      <div>
        <div id='box1'>
        <div className="boxes">
          <span>About Us</span>
          <ul>
            <li>Press Release</li>
            <li>Agriculture Science</li>
            <li>Agriculture Arts</li>
          </ul>
        </div>
        <div className="boxes">
          <span>Contact Us</span>
          <div id="handle1">
              <img src={facebook} alt="facebook.png" id='facebook'/>
              <img src={instagram} alt="instagram.png" id='instagram'/>
              <img src={twitter} alt="twitter.png" id='twitter'/>
              <img src={youtube} alt="youtube.png" id='youtube' />
          </div>
          <div id="handle2">
            <img src={playstore} alt="playstore.png" id='playstore'/>
            <img src={appstore} alt="appstore.png" id='appstore'/>
          </div>
        </div>
        <div className="boxes">
          <span>Other Services</span>
          <ul>
            <li>Agriculture</li>
            <li>Education</li>
            <li>Money Management</li>
          </ul>
        </div>
      </div>
      <div id='box2'>
        <button id='joinUs'></button>
        <img src={hindiText} alt="hindiText.png" id='hinditext'/>
        <button id='becomeASeller'>BECOME A SELLER</button>
      </div>
      </div>
      <div id='box3'></div>
    </footer>
    <div className='box4'>
        <div className='box4'>
          <button id='dot'></button>
          <span>All Rights Reserved</span>
        </div>
        <span>Farmerstouch.org</span>
        <span>@2023</span>
      </div>
    </div>
    
  )
}
