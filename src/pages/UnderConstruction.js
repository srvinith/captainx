import React from 'react'
import under from '../assets/images/under-concs.png'
import { Link } from 'react-router-dom'
import langData from '../locales/langData.json'

const UnderConstruction = ({language}) => {
    const underconstruc = langData[language].underconstruc;
  return (
    <>
    <center>

    <div className='cen-sec-con not-found mt-4'>
<img src={under} alt='notfound' className='under-cons-img' />
<h2 className='sec-title under'  dangerouslySetInnerHTML={{ __html: underconstruc.sectitle }}></h2>
<p className='sec-p'>
  {underconstruc.desc}
</p>
<Link to="/">

<button className='explore-btn cta-btn my-4 gap-3'>{underconstruc.btn}</button>
</Link>
    </div>
    </center>
    </>
  )
}

export default UnderConstruction