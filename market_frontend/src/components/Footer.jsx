import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm pt-8 bg-zinc-900 px-8 text-gray-300'>
    {/* Contenido superior */}
        <div>
            <img src={assets.logo} className='mb-5 w-40 pl-2' alt="" />
            <p className='w-full md:w-2/3 '>
                Moda y estilo a tu alcance. Síguenos en redes sociales para 
                conocer nuestras últimas colecciones y ofertas exclusivas.
            </p>
        </div>
        <div className='text-gray-300'>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='text-gray-300'>
            <p className='text-xl font-medium mb-10'>Get In Touch</p>
            <ul className='flex flex-col gap-1'>
                <li>+507-6844-0550</li>
                <li>contact@gabrielin.com</li>
                
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