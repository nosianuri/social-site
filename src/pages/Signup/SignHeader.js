import React from 'react';
import ray from "../../assets/ray.png";

const SignHeader = () => {
  return (
    <div>
      <div className='flex justify-end items-center py-2 bg-[#355990] '>
        <i class="fa-sharp fa-solid fa-circle-question text-[#5188dc] pr-2"></i>
        <a href="mailto:ripon@rayadvertising.com">
          <span className='text-[#5188dc] pr-5'>support</span>
        </a>
      </div>
      <div className='bg-[#355990] py-8'>

        <div className='flex justify-center'>
          <img className='w-[300px]' src={ray} alt="" />
        </div>

      </div>

    </div>
  )
}

export default SignHeader