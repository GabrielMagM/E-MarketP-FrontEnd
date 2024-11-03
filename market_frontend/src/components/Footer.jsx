import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    {/* Contenido superior */}
    <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-500'>
            Moda y estilo a tu alcance. Síguenos en redes sociales para 
            conocer nuestras últimas colecciones y ofertas exclusivas.
        </p>
    </div>
    <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-1 text-gray-500'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div>
        <p className='text-xl font-medium mb-10'>Get In Touch</p>
        <ul className='flex flex-col gap-1 text-gray-500'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveru.com</li>
        </ul>
    </div>

    <div className='col-span-3'>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 TutancaMoon. Todos los derechos reservados.</p>
    </div>
</div>
  )
}

export default Footer