import React from 'react'

const Contactconten = () => {
  return (
    <div className="form">
        <form action='' encType=''>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='type your message here'></textarea>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default Contactconten;