import React, {useState} from 'react';
import {menu, close, logo } from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleclick =()=>setToggle(!toggle)

    return (
        <div className="w-full h-[80px] z-20 bg-amber-600 field-sizing-fixed drop-shadow-xl px-6 py-6 ">  
          
          <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
            
            {/* Logo */}
            <div className="mr-auto flex items-center ">
                <img
                 src={logo}
                 alt="logo"
                 className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' 
                 
                 />
            </div>
            
             {/* Navigation Links */}
            <div className="hidden md:flex items-center">
                <ul className="flex space-x-8">
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
             
            </div>
           
           {/* Auth Buttons */}
            <div className="hidden md:flex items-center  space-x-4 ml-auto">
                <button className="text-black px-6 py-2">Login</button>
                <button className="text-black px-6 py-2">Sign up</button>

            </div>

         {/* Mobile Menu Icon */}
            <div className="md:hidden" onClick={handleclick}>
                <img src={!toggle?menu:close}
                 alt="menu" 
                 className="w-[28px] h-[28px] object-contain mr-10" 
                />
             </div> 

            </div>
             <ul className={toggle?'absolute bg-amber-400 w-full px-8 md:hidden':'hidden'}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                    <div className="flex flex-col mt-4">
                         <button className="text-black px-6 py-2 mb-6">Login</button>
                         <button className="text-black px-6 py-2">Sing up</button>
                    </div>
                </ul>
      </div>
  );
}

export default Navbar;