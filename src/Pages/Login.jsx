
import React, { useState } from 'react';
import img1 from '../img/Rectangle 79.png';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      {/* login */}
      <div className='flex flex-col lg:flex-row relative'>
        <div className={`bg-red-900 text-white flex flex-col justify-center items-center p-8 h-[100vh] ${isSignUp ? 'w-full' : 'lg:w-2/3'} relative`}>
          <h1 className='text-[2rem] mb-2'>{isSignUp ? 'Create a New Account' : 'Login To Your Account'}</h1>
          <p className='text-gray-300 mb-4'>Login using social networks</p>
          {!isSignUp ? (
            <>
              <input className='bg-red-500 mt-12 text-white rounded-md w-2/3 p-2 mb-4' type="text" placeholder='Email' />
              <input className='bg-red-500 text-white rounded-md w-2/3 p-2 mb-4' type="password" placeholder='Password' />
              <button className='bg-white text-red-500 rounded-lg px-4 py-2 m-4 w-1/3'>Login</button>
              <p className='text-gray-300 cursor-pointer' onClick={() => setIsSignUp(true)}>Don't have an account? Sign up</p>
            </>
          ) : (
            <>
              <input className='bg-white text-gray-400 rounded-full w-2/3 p-2 mb-4 shadow-inner shadow-gray-400' type="text" placeholder='Enter full Name' />
              <input className='bg-white text-gray-400 rounded-full w-2/3 p-2 mb-4 shadow-inner shadow-gray-400' type="text" placeholder='Enter Email' />
              <input className='bg-white text-gray-400 rounded-full w-2/3 p-2 mb-4 shadow-inner shadow-gray-400' type="password" placeholder='Enter Password' />
              <button className='bg-white text-red-500 rounded-lg px-4 py-2 m-4 w-1/3'>Sign Up</button>
              <p className='text-gray-300 cursor-pointer' onClick={() => setIsSignUp(false)}>Already have an account? Login</p>
            </>
          )}
        </div>
        <div className={`h-[100vh] w-1/3 relative hidden lg:block`}>
          <img src={img1} alt="" className='w-full h-[100vh]' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-3xl font-bold text-white'>Create a New Account</h1>
            <button
              className='bg-white text-red-700 rounded-lg px-4 py-2 m-4'
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? ' Login' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
