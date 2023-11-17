import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../Constant/GovernmentServices.css'
import { useNavigate } from 'react-router-dom'

export default function GovernmentServices() {
    const navigate = useNavigate();
    const openRegistrationPage = ()=>{
        navigate('/government-services/registration-page');
    }
  return (
    <div>
        <NavBar/>
        <div id='body1'>
            <div id='box5'>
                <div id="box6">
                    <div className='leftSidebtns'><button>Crop Insurance</button></div>
                    <div className='rightSidebtns'><button>Soil Health Card</button></div>
                    <div className='leftSidebtns'><button onClick={openRegistrationPage}>Land Registration</button></div>
                    <div className='rightSidebtns'><button>Farmers Insurance</button></div>
                    <div className='leftSidebtns'><button>Pension Scheme</button></div>
                    <div className='rightSidebtns'><button>Loan</button></div>
                    <div className='leftSidebtns'><button>Krishi UDHAN</button></div>
                    <div className='rightSidebtns'><button>Credit Facility</button></div>
                    <div className='leftSidebtns'><button>Vehicle Insurance</button></div>
                    <div className='rightSidebtns'><button>PM Kisan Mandhar</button></div>
                </div>
                <div id='box7'>
                    <button id='topbtn'>TOP 10</button><br />
                    <span>GOVERNMENT</span>
                    <span>AGRICULTURE SCHEMES</span>
                    <span>FOR FARMERS</span>
                </div>
            </div>
            <div id='box8'>
                <div id="photo1"></div>
                <div id="photo2"></div>
                <div id="photo3"></div>
                <div id="photo4"></div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
