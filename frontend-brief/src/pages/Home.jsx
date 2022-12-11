import React from 'react'
import {HiMenuAlt3, HiUserGroup, HiClipboardList} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import {FaSchool} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Home = () => {
  const menus = [
    {name : "Home", icon: AiFillHome},
    {name : "Promotion", icon: FaSchool},
    {name : "Apprenants", icon: HiUserGroup},
    {name : "Brief", icon: HiClipboardList},
  ]
  return (
    <section className='flex gap-6'>
        <div className='bg-[#FFFFFF] min-h-screen w-60 px-4'>
            <div className='py-3 flex justify-end'>  
                <HiMenuAlt3 size={26} className="cursor-pointer hover:text-[#FF7A00]" />
            </div>
            <div>
              
            </div>
            <div className='mt-4 flex flex-col gap-4 relative '>
              {menus.map((menu,i)=>(

                <div className='flex items-center text-sm gap-3.5 font-medium p-2 hover:text-[#FF7A00] cursor-pointer'>
                  <div>{React.createElement(menu.icon, {size: "20"})}</div> 
                  <h2>{menu.name}</h2>
                </div>

              ))}

            </div>
        </div>
        <div className='m-3 text-xl text-gray-900 font-semibold'>
            amine salmi
        </div>
    </section>
  )
}

export default Home