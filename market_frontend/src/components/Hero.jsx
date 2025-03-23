import React from 'react'
import Slider from 'react-slick'
import { assets } from '../assets/assets'

const Hero = () => {
  const settings = {
    dots: true, // Agrega puntos de navegación
    infinite: true, // Hacer que el carrusel sea infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar un solo slide a la vez
    slidesToScroll: 1, // Desplazarse una imagen a la vez
    nextArrow: <div className="slick-next bg-red-200"></div>, // Personalización del botón next
    prevArrow: <div className="slick-prev"></div> // Personalización del botón prev
  };

  return (

    <div className='flex flex-col sm:flex-row border-y-2 border-gray-600'>
      {/*----------Hero Left Side 
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#303030]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular leading-relaxed text-3xl lg:text-5xl'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md::text-base'>SHOP NN</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
        </div>----------------------*/}
        
    {/*--------- Hero Right Side image carrusel----------------------*/}    
        <div className='w-full'>
          <Slider {...settings}>
            <div>
              <img src={assets.killsona} className='h-auto' alt="Hero " />
            </div>
            {/* Puedes agregar más imágenes aquí cuando sea necesario */}
            <div>
              <img src={assets.killsona} className='h-auto' alt="Hero " />
            </div>
          </Slider>
        </div>

    </div>
  )
}

export default Hero