// after connect


import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>

      {/* footer */}
      <div className='flex flex-col md:flex-row bg-black mt-16 p-12 md:p-10 justify-between'>
        {/* left */}
        <div className='mb-6 md:mb-0 order-1 md:order-1 lg:ml-8'>
          <h1 className='text-white font-semibold'>Services</h1>
          <h1 className='text-blue-400'>Magazine</h1>
          <h1 className='text-blue-400'>Newspapers</h1>
          <h1 className='text-blue-400'>Publication</h1>
          <h1 className='text-blue-400'>Online Ordering</h1>
        </div>
        {/* center */}
        <div className='text-center mb-6 md:mb-0 order-3 md:order-2'>
          <div className='mt-8 md:mt-16'>
           
            <div className=" px-12  lg:px-0  cursor-pointer text-white flex  justify-between items-center">
              <CiLinkedin />
              <BiLogoGmail/>
              <FaFacebook/>
              <FaTwitter/>
              < FaWhatsapp/>
             
            </div>

            <h1 className='mt-4 text-white text-sm sm:mb-0  lg:mb-4 mb-4 pb-6'>Social media</h1>
          </div>
          <h1 className='text-white bottom-0 mt-16 '>Copyright © 2024</h1>
        </div>
        {/* right */}
        <div className='mb-6 md:mb-0 order-2 md:order-3 lg:mr-8'>
          <h1 className='text-white'>About</h1>
          <h1 className='text-blue-400'>Company</h1>
          <h1 className='text-blue-400'>Our Vision</h1>
          <h1 className='text-blue-400'>newspaperwala@gmail.com</h1>
          <h1 className='text-blue-400'>Address :</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
