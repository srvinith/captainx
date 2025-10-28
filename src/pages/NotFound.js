import React from 'react'
import notfound from '../assets/images/notfound.svg'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
    <center>

    <div className='cen-sec-con not-found under'>
<img src={notfound} alt='notfound' className='img-fluid' />
<h2 className='sec-title'>
    <span>Captain X </span>Lost in Space
</h2>
<p className='sec-p'>
    Looks like our captain took a wrong turn in the galaxy. Let’s help you navigate back to home base.
</p>
<Link to="/">

<button className='explore-btn cta-btn my-4 gap-3'>Back to Home</button>
</Link>
    </div>
    </center>
    </>
  )
}

export default NotFound