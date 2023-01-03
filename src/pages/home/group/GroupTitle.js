import React, { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const GroupTitle = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ background: `url(https://i.ibb.co/HzbgDnX/reach-us.png)` }} className='  text-center mb-2 !bg-cover bg-no-repeat'>
      <div className='lg:py-12'>
        <motion.h1
          variants={fadeIn('down', 'tween', 0.2, 1.1)}
          initial='hidden'
          whileInView={'show'}>
          <h1 className='text-white lg:text-7xl lg:pt-0 pt-2' data-aos="fade-right">REACH US TODAY!</h1>
        </motion.h1>
        <motion.p
          variants={fadeIn('down', 'tween', 0.4, 1.1)}
          initial='hidden'
          whileInView={'show'}
          className='  text-center'
        >
          <p className='text-white lg:text-xl text-sm lg:mt-3  pb-3 ' data-aos="fade-left">Let’s See How We Can Work Together.</p>
        </motion.p>
      </div>

    </div>
  )
}

export default GroupTitle