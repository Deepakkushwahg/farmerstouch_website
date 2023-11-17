import React from 'react'
import '../Constant/NavBar.css'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
      <nav>
        <div id='header1'>
            <div id='item1'>
                <div id='circle1'></div>
                <div className='column1'>
                    <span id='title'>Farmerstouch.in</span>
                    <span id='subtitle'>
किसानों का सच्चा साथी</span>
                </div>
            </div>
            <div id='item2'>
                <div id='circle2'></div>
                <div className='column2'>
                    <span id='toll'>Toll Free</span>
                    <span id='tollNumber'>1800-000-0000</span>
                </div>
            </div>
            <div id='item3'>
                <button id='flag'></button>
                <button id='login-signup'>LOGIN / SIGNUP</button>
            </div>
        </div>
        <hr />
        <div id='header2'>
            <div id='gmaillogo'></div>
            <div id="item4">
              <div className="items"><NavLink to="/government-services"><span>GOV</span> <span>Services</span></NavLink></div>
              <div className="items"><NavLink to="#"><span>Farmers</span> <span>Pay</span></NavLink></div>
              <div className="items"><NavLink to="#"><span>Crop</span> <span>Selling</span></NavLink></div>
              <div className="items"><NavLink to="/buy-seeds"><span>Buy</span> <span>Seeds</span></NavLink></div>
              <div className="items"><NavLink to="#"><span>Crop Insurance</span><span>Facility</span></NavLink></div>
              <div className="items"><NavLink to="#"><span>Savings</span> <span>Facility</span></NavLink></div>
              <div className="items"><NavLink to="#"><span>Fertilization</span> <span>& Pesticides</span></NavLink></div>
              <div className="items"><NavLink to="#"><span>Offers</span> <span>& Jobs</span></NavLink></div>
              <div className="items"><NavLink to="#">Charity</NavLink></div>
              <div className="items"><NavLink to="#"><span>Products</span> <span>& Components</span></NavLink></div>
            </div>
        </div>
      </nav>

  )
}
