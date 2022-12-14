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
    <div className='flex cursor-pointer rounded-  px-4 sm:flex-row sm:space-x-6 sm:space-y-0'> 
         {briefs.map((brief) => {
          return (

              <div key={brief.id_brief} 
              className='w-full max-w-sm overflow-hidden 
              rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-xl'>
                <img src={ img_brief } className='mx-auto h-40 w-65'/>

                <h1 className='mt-2 text-2xl font-bold'>{brief.name_brief}</h1>
                <h3 className='my-4 text-center text-sm text-gray-500'> Date Start : {brief.start_brief} </h3>
                <h3 className='my-4 text-center text-sm text-gray-500'> Date End : {brief.end_brief} </h3>
                <div className=' px-4 py-4 text-center flex space-x-4'>
                  <button className='inline-block text-white rounded-3xl bg-black px-6 h-10 duration-75'>plus detail </button>
                  <button className='inline-block border border-black rounded-3xl bg-white px-6 py-2 h-10 font-semibold shadow-md duration-75 '>TACHES</button>
                </div>
              </div>

          ); 
         })}
    </div>
  )
}

export default  Brief