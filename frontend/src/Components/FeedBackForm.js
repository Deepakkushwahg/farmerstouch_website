import React from 'react'
import '../Constant/FeedBackForm.css'
export default function FeedBackForm() {
  return (
    <div id='feedback-form'>
            <form id='form' onSubmit="">
              <span id='feedback'>Feedback Form !</span>
              <div className='inputs'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='Name' id='name'/>
              </div>
              <div className='inputs'>
                <label htmlFor="name">Email:</label>
                <input type="email" name="Email" id="email" />
              </div>
              <div className='inputs'>
                <label htmlFor="name">Ph No::</label>
                <input type="number" name="PhoneNumber" id="phoneNumber" />
              </div>
              <input type="submit" value="Submit" id='submit' />
            </form>
        </div>
  )
}
