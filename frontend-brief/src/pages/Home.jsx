import React, { useState } from 'react'
import {HiMenuAlt3, HiUserGroup, HiClipboardList} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import {FaSchool} from 'react-icons/fa';
import NavBar from '../components/NavBar';



const Home = () => {
  const menus = [
    {name : "Home", icon: AiFillHome},
    {name : "Promotion", icon: FaSchool},
    {name : "Apprenants", icon: HiUserGroup},
    {name : "Brief", icon: HiClipboardList},
  ]
  const [open, setOpen] = useState(true);

  return (
    <div>
    <NavBar />
    <section className='flex gap-6'>
        <div className={`bg-[#FFFFFF] min-h-screen ${open ? 'w-60': 'w-16'} duration-500 px-3`}>
            <div className='py-3 flex justify-end'>  
                <HiMenuAlt3 size={26} className="cursor-pointer hover:text-[#FF7A00] duration-500" onClick={() => setOpen(!open)}/>
            </div>
            <div>
              
            </div>
            <div className='mt-4 flex flex-col gap-4 relative '>
              {menus.map((menu,i)=>(

                <div className='flex items-center text-sm gap-3.5 font-medium p-5 hover:text-[#FF7A00] cursor-pointer'>
                  <div>{React.createElement(menu.icon, {size: "20"})}</div> 
                  <h2 
                    style={{ transitionDelay: `400ms` }}
                     className={`whitespace-pre duration-500 ${!open && 'opacity-0 overflow-hidden'}`}>
                    {menu.name}
                  </h2>
                </div>

              ))}

            </div>
        </div>

    </section> </div>
  )
}

export default Home