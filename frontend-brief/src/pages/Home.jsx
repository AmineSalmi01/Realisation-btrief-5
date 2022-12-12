import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import Promotion from '../data-images/Promotion.svg'


const Home = () => {
 

  return (
    <div className='w-full bg-white border border-black-500 rounded-lg'>
        <div className='flex'>
          <h2>Home</h2>
          <BsChevronDown />
        </div>
        <div className='flex'>
          <img src={Promotion} alt='' />
          <div>
            <h6>CYBER GANG</h6>
            <h6>Promo dev web Solicode 22/23 </h6>
          <div>
            <span>
               16 apprenants
            </span>

            <span>
               16 apprenantsINT - Maroc
            </span>

            <span>
              25/09/2022 
              24/08/2023
            </span>

          </div>
          </div>
        </div>
    </div>
  )
}

export default Home