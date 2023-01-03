import React from 'react'
import ClientReview from '../ClientSays/ClientReview';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const Trafic = () => {
  return (
    <section className=''>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1.6)}
        initial='hidden'
        whileInView={'show'}

      >
        <div className=' section-title-group max-w-[540px] mx-auto px-4 lg:px-10 text-center'>
          <p className='lg:text-4xl md:text-2xl text-xl mt-10 text-[#12232E] font-bold'>TRAFFIC PARTNERS</p>

        </div>
      </motion.div>
      <div className='my-10 lg:mx-32'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1.6)}
          initial='hidden'
          whileInView={'show'}

        >
          <ClientReview />
        </motion.div>


      </div>
    </section>
  )
}

export default Trafic;