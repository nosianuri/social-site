import React, { useEffect } from 'react';
import './Group.css';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const Group = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-32 lg:mr-28 mx-5 overflow-hidden '>
                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1.8)}
                    initial='hidden'
                    whileInView={'show'}
                >
                    <div className='bg-[#003144] text-center pt-16 lg:px-20 px-2' data-aos="flip-right">
                        <h1 className='bg-white text-3xl text-[#12232E] font-bold'>PUBLISHERS</h1>
                        <p className='text-sm text-white mt-3 mb-5'>Promote high-converting campaigns from leading US advertisers seeking your media-buying, content marketing, social media, and e-mail marketing expertise.</p>
                        <button className='mb-10  bg-[#FD5D14]'
                            padding="10px 15px"
                            color="#e64100"
                            size="lg"
                            border-color="#e64100"
                            border-radius="5px"
                            width="100%"
                            fontSize="18px"
                            margin="0px auto 20px auto"
                            variant="outline-light"
                            id="action-btn"
                        >
                            Sign Up
                        </button>
                    </div>
                </motion.div>
                <div className='lg:w-[200px] w-[50px] h-[2px] bg-white lg:hidden block'></div>
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1.8)}
                    initial='hidden'
                    whileInView={'show'}
                >
                    <div className='bg-[#003144] text-center pt-16 lg:px-20 px-2' data-aos="flip-right">
                        <h1 className='bg-white text-3xl font-bold text-[#12232E]'>ADVERTISERS</h1>
                        <p className='text-sm text-white mt-3 mb-5'>Our team of media-buyers and content marketing experts. We are here to deliver you highly engaged customers via display, native, or email marketing channels.</p>
                        <button className='mb-10'
                            padding="10px 15px"
                            color="#e64100"
                            size="lg"
                            border-color="#e64100"
                            border-radius="5px"
                            width="100%"
                            fontSize="18px"
                            margin="0px auto 20px auto"
                            variant="outline-light"
                            id="action-btn"
                        >
                            Sign Up
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Group