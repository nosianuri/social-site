import React from 'react'
import Advertiserpartner from './Advertiserpartner';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const Advertiser = () => {
  return (
    <section className='pt-10'>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1.6)}
        initial='hidden'
        whileInView={'show'}

      >
        <div className=' section-title-group max-w-1/2 mx-auto px-4 lg:px-10 text-center'>
          <p className='lg:text-4xl md:text-2xl text-xl mt-10 font-bold text-[#12232E] '>ADVERTISING PARTNERS</p>

        </div>
      </motion.div>

      <div className='my-10 lg:mx-32'>
      <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1.6)}
          initial='hidden'
          whileInView={'show'}
          
        >
<Advertiserpartner />

        </motion.div>
        
      </div>
    </section>
  )
}

export default Advertiser