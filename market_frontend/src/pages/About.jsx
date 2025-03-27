import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetterBox'
const About = () => {



  return (
    <div className=''>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='px-10 my-10 flex flex-col md:flex-row gap-16 '>
          <img src={assets.about_img} alt=""  className='w-full md:max-w-[450px]'/>
          <div className='flex flex-col justify-center gap-6 md:2-2/4 text-gray-600'>
              <p>Descubre una amplia variedad de productos diseñados para satisfacer todas tus necesidades. Desde moda y tecnología hasta decoración y belleza, tenemos algo especial para todos.</p>
              <p>Nos enfocamos en ofrecerte calidad, precios competitivos y una experiencia de compra sencilla y segura. Navegar por nuestra plataforma es fácil y rápido, para que encuentres lo que buscas en cuestión de minutos.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Nuestra misión es ofrecer productos de calidad a precios accesibles, creando una experiencia de compra fácil, segura y satisfactoria. Trabajamos para inspirar confianza y felicidad en cada cliente que elige nuestra tienda.</p>
          </div>
      </div>

      <div className='text-2xl py-4 px-10'>
          <Title text1={'WHY '} text2={'CHOOSE US'}/> 
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 px-10'>

        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'> 
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Nos enorgullece ofrecer productos de alta calidad cuidadosamente seleccionados para satisfacer las necesidades y expectativas de nuestros clientes. Cada artículo en nuestra tienda pasa por rigurosos estándares para garantizar durabilidad, funcionalidad y estilo en cada compra.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'> 
            <b>Convenience :</b>
            <p className='text-gray-600'>Nuestra tienda está diseñada pensando en tu comodidad, ofreciendo una experiencia de compra intuitiva y eficiente. Desde una navegación fácil hasta opciones de pago rápidas, hacemos que adquirir lo que necesitas sea sencillo y agradable.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5'> 
            <b>Exceptional Cusomer Service :</b>
            <p className='text-gray-600'>Estamos comprometidos con brindarte un servicio al cliente de primer nivel. Nuestro equipo está disponible para responder tus preguntas, solucionar cualquier inconveniente y asegurarse de que cada compra cumpla con tus expectativas.</p>
        </div>
      </div>

      <NewsLetter/>

    </div>


  )
}

export default About