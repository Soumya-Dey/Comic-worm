import React from 'react';
import { Link } from 'react-router-dom';

import dcLogo from './dc-logo.jpg';
import mvLogo from './marvel-logo.jpg';

const Landing = () => {
  return (
    <div className='px-12 py-8 bg-gray-100'>
      <div className='pb-6 flex items-end'>
        <h3 className='text-green-500 text-2xl font-bold opacity-60 mr-2'>
          The
        </h3>
        <h1 className='text-green-500 text-4xl font-bold'>Universes</h1>
      </div>
      <section className='flex w-full h-screen'>
        <Link className='relative w-6/12 h-80 mr-10 flex justify-center items-center overflow-hidden rounded-lg card'>
          <div className='transform w-full h-full bg-center bg-no-repeat bg-cover object-cover dc-card rounded-lg transition duration-500 ease-in-out hover:scale-110'></div>
          <div className='w-full px-8 py-5 absolute bottom-0 rounded-lg footer'>
            <div className='flex items-center mb-3'>
              <img src={dcLogo} className='w-20 rounded-md mr-3'></img>
              <p className='text-white text-xl font-bold'>Universe</p>
            </div>
            <p className='text-white opacity-60 text-sm'>
              Since 1938 (as National Allied Publications)
            </p>
          </div>
        </Link>
        <Link className='relative w-6/12 h-80 flex justify-center items-center overflow-hidden rounded-lg card'>
          <div className='transform w-full h-full bg-center bg-no-repeat bg-cover object-cover mv-card rounded-lg transition duration-500 ease-in-out hover:scale-110'></div>
          <div className='w-full px-8 py-5 absolute bottom-0 rounded-lg footer'>
            <div className='flex items-center mb-3'>
              <img src={mvLogo} className='w-20 rounded-md mr-3'></img>
              <p className='text-white text-xl font-bold'>Universe</p>
            </div>
            <p className='text-white opacity-60 text-sm'>
              Since 1939 (as Timely Comics)
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
