import React, { Fragment } from 'react';

import diamond from './logo-diamond.svg';

const Navbar = () => {
  return (
    <nav className='w-full bg-gray-900 px-4 py-5 flex justify-center items-center text-white border-b-4 border-green-500'>
      <h1 className='text-3xl font-bold'>Comic</h1>
      <Fragment>
        <img
          src={diamond}
          className='mx-4'
          style={{
            width: '60px',
          }}
          alt='logo'
        />
      </Fragment>
      <h1 className='text-3xl font-bold'>Worm</h1>
    </nav>
  );
};

export default Navbar;
