import React from 'react'
import '../Constant/RegistrationPage.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function RegistrationPage() {
  return (
    <div>
        <NavBar/>
        <div id='body2'>
            <form id='register' onSubmit="" method='post'>
                <h1>Registration</h1>
                <div id='form-contents'>
                    <label htmlFor="FirstName">First Name:</label>
                    <input type="text" name='FirstName' id='firstName'/>
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" name='LastName' id='lastName'/>
                    <label htmlFor="Gender">Gender:</label>
                    <input type="text" name='Gender' id='gender'/>
                    <label htmlFor="TypeOfFarmer">Type of Farmer:</label>
                    <input type="text" name="TypeOfFarmer" id="typeOfFarmer" />
                    <label htmlFor="AdharNumber">Adhar No:</label>
                    <input type="text" name='AdharNumber' id='adharNo'/>
                    <label htmlFor="MobileNumber">Mobile No:</label>
                    <input type="text" name='MobileNumber' id='mobileNo'/>
                    <label htmlFor="Nominee">Nominee</label>
                    <input type="text" name='Nominee' id='nominee'/>
                    <label htmlFor="Address">Address:</label>
                    <input type="text" name='Address' id='address'/>
                </div>
                <input type="submit" value="SUBMIT" id='submitbtn'/>
            </form>
        </div>
        <Footer/>      
    </div>
  )
}
