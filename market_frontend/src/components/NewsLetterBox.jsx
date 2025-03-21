import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event) =>{
    event.preventDefault();
  } 

  return (
    <div className='text-center bg-zinc-900 pb-4'>
        <p className='text-2x1 font-medium text-gray-300'>Suscribe now & get 20% off </p>
        <p className='text-gray-400 mt-3'>
         {/*Aqui va al escrito que se visualiza en la pagina*/}
        </p>
        <form action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3'>
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
          <button className='bg-gray-600 text-yellow-100 text-xs px-10 py-4' type='submit'>
            Subscribe
          </button>
        </form>
    </div> 
  )
}

export default NewsLetterBox
