import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');


  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className=''/>
        </div>

    </form>
  )
}

export default Login