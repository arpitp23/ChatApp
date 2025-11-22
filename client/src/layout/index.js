import React from 'react';
import image from '../assests/logo.png';
 
const AuthLayouts = ({ children }) => {
  return (
    <>
      <div>
        <header className='flex justify-center items-center py-1 h-20 bg-white shadow-md'>
          <img
            src={image}
            alt="Logo"
            width="200"
            height="60"
          />
        </header>
      </div>
      {children}
    </>
  );
};

export default AuthLayouts;
