import React from 'react'
import '../Constant/HalfNavBar.css'
export default function HalfNavBar() {
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
    </nav>
  )
}
