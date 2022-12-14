import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img_brief from '../data-images/images.svg';

const  Brief = () => {
  const [briefs, setBriefs] = useState([]);

  useEffect(() => {
    const getBrief = async () => {
      const apiBrief = await axios.get('http://127.0.0.1:8000/api/Brief');
      setBriefs(apiBrief.data);
    }
    getBrief();
  }, [])
  return (
    <div className='flex justify-around flex flex-wrap cursor-pointer rounded-3xl  py-4 px-4 sm:flex-row sm:space-x-6 sm:space-y-0'> 
         {briefs.map((brief) => {
          return (

              <div key={brief.id_brief} 
              className='w-80 display max-w-sm overflow-hidden 
              rounded-3xl bg-white duration-300 hover:scale-105 hover:shadow-xl'>
                <img src={ img_brief } className='w-full'/>

                <h1 className=' my-2 text-xl font-semibold mx-6'>{brief.name_brief}</h1>
                <h3 className='text-justify text-gray-500 text-xs mx-6'> Date Start : {brief.descrip} </h3>
                <div className=' mx-8 px-4 py-4 text-center flex space-x-4'>
                  <button className='inline-block text-white rounded-3xl bg-black px-5 h-9 duration-75'>plus detail </button>
                  <button className='inline-block border border-black rounded-3xl bg-white px-5 h-9 font-semibold shadow-md duration-75 '>TACHES</button>
                </div>
              </div>

          ); 
         })}
    </div>
  )
}

export default  Brief