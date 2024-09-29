import React from 'react'
import {assets} from '../assets/assets'
function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 front-medium'>
        <img src={assets.logo}  alt="" />
    </div>
  )
}

export default Navbar