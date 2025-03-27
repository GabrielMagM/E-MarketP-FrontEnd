import React, { useContext, useState, useEffect } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'
import {svg} from '../svg/svg'
import { ShopContext } from '../context/ShopContext';
function Navbar() {
  const [visible,setVisible] = useState(false);
  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () =>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (getCartCount() > 0) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500); // La animación dura 0.5 segundos
    }
  }, [getCartCount()])

  return (
    <div className='flex items-center justify-around py-6 font-medium bg-zinc-900'>
        <NavLink to='/'>
          <img src={assets.logo} className='w-32 h-8 cursor-pointer' alt="" />
        </NavLink>
        <ul className='hidden sm:flex gap-10 text-md text-gray-200'>
          <NavLink to='/' className='flex flex-col items-center gap-1 hover:scale-110 transition ease-in-out hover:font-bold hover:text-white'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:scale-110 transition ease-in-out hover:font-bold hover:text-white'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='about' className='flex flex-col items-center gap-1 hover:scale-110 transition ease-in-out hover:font-bold hover:text-white'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to='contact' className='flex flex-col items-center gap-1 hover:scale-110 transition ease-in-out hover:font-bold hover:text-white'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
        </ul>

       {/* <div className='flex items-center gap-1'>
          <img src={svg.instagram} className='w-4 h-4 cursor-pointer' alt="Instagram Logo" />
        </div>*/}

        <div className='flex items-center gap-4'>
          <img onClick={()=>setShowSearch(true)} src={svg.search} className='w-6 cursor-pointer ' alt="" />
          <div className='group relative'> 
            <img onClick={()=> token ? null : navigate('/login')} className='w-6 cursor-pointer' src={svg.person}  alt="" />
            {/* -----------------DropDOWN Menu----------*/}
            {token && 
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-blue-700'>My Profile</p>
                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-green-500'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-red-500'>Logout</p>
              </div>
            </div>}

          </div>
          <Link to='/cart' className='relative'>
              <img src={svg.local_cart} className={`w-6 min-w-5 cart-icon ${isAnimating ? 'animate' : ''}`} alt="" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>

      {/*Sidebar is Visible when */}
          <img onClick={()=>setVisible(true)} src={svg.menu} className='w-7 cursor-pointer sm:hidden' alt="" />
        </div>

      {/*Sidebar Menu for small screens*/}
      <div className={`z-10 absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-1/2' : 'w-0'} `}> 
          <div className='flex flex-col text-gray-600 '>
              <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 '>
                  <img className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt="" />
                  <p className='cursor-pointer'>Back</p>
              </div>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-12 border' to='/collection'>COLLECTION</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-12 border' to='/'>HOME</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-12 border' to='/about'>ABOUT</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-12 border' to='/contact'>CONTACT</NavLink>
          </div>
      </div>

    </div>
  )
}

export default Navbar