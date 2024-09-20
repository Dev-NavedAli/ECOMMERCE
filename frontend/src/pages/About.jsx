import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox"

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={"ABOUT"} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt asperiores dolores doloremque debitis ipsa animi soluta quos nemo totam hic illum alias suscipit distinctio tempore quam porro, exercitationem quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo natus quas, rem molestiae sapiente cum ut harum tenetur? Voluptates earum atque sequi aliquam soluta libero quas laboriosam pariatur vero.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid voluptatum consequatur sunt natus commodi ullam ea quia corrupti velit modi nostrum soluta laborum excepturi hic dolorum quidem, asperiores dolor.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Tittle text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance : </b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita ea voluptas accusantium corporis atque eligendi ad neque assumenda. Pariatur temporibus nesciunt corrupti esse recusandae officia iusto dolorum cumque consequuntur?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience : </b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita ea voluptas accusantium corporis atque eligendi ad neque assumenda. Pariatur temporibus nesciunt corrupti esse recusandae officia iusto dolorum cumque consequuntur?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer service : </b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita ea voluptas accusantium corporis atque eligendi ad neque assumenda. Pariatur temporibus nesciunt corrupti esse recusandae officia iusto dolorum cumque consequuntur?</p>
        </div>
      </div>
      <NewsLetterBox/>


    </div>


  )
}

export default about
