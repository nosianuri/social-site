import React, { useEffect } from 'react';
import img from '../../../assets/short.png';
import Faq from '../../../components/faq/Faq';
import './Faq.css';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const Faqs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className='absolute '>
                <div className='bg-black bg-opacity-25'></div>
                <img className='' src={img} alt="" />
            </div>

            <div className='mx-auto relative pt-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-32 lg:mr-28  overflow-hidden gap-10 lg:pt-32 pt-10 justify-center items-center'>
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1.8)}
                        initial='hidden'
                        whileInView={'show'}
                    >
                        <div className='lg:pt-28 '>
                            <Faq />
                        </div>
                    </motion.div>
                    <div className=' mb-16 mt-[-30px] form-box mx-5' data-aos="fade-left">
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1.8)}
                            initial='hidden'
                            whileInView={'show'}
                        >
                            <div class="box" >
                                <div class="form">
                                    <h2 className='text-3xl bg-[#45f3ff] !text-[#003144]'>Sign in</h2>
                                    <div class="inputBox">
                                        <input type="text" required="required" />
                                        <span>Your Name*</span>
                                        <i></i>
                                    </div>
                                    <div class="inputBox">
                                        <input type="email" required="required" />
                                        <span>Your Email*</span>
                                        <i></i>
                                    </div>
                                    <div class="inputBox">
                                        <input type="number" required="required" />
                                        <span>Your Number*</span>
                                        <i></i>
                                    </div>
                                    <div class="inputBox">
                                        <input type="text" required="required" />
                                        <span>Enter your message</span>
                                        <i></i>
                                    </div>
                                    {/* <div class="links">
                                    <a href="#">Forget Password</a>
                                    <a href="#">Signup</a>
                                </div> */}
                                    <input type="submit" value="SUBMIT MESSAGE" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Faqs;