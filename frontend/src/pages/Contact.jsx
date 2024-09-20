import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Tittle text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img  className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54079 William Street <br />Suite 350,Washington DC, USA</p>
          <p className='text-gray-500'><b>Tel :</b> (415) 555-0132 <br /> <b>Email :</b> nomanali5097@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
          <p className='text-gray-500'>Learn more abou our team and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact
