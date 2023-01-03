import React, { useState } from 'react';
import banner from "../../assets/imgpsh_fullsize_anim2.png";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../shared/variants';
import ServiceBody from './ServiceBody';
import upimg from "../../assets/imgpsh_fullsize (2).png";
import GroupTitle from '../home/group/GroupTitle';
import Group from '../home/group/Group';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../Shared/Footer';
import AnimatedLetters from '../../shared/AnimatedLetters/AnimatedLetters';

const Service = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    return (
        <div>
            <Navbar />
            <div class="hero !bg-no-repeat !bg-cover" style={{
                background: `url(${banner})`
            }}>
                <div class="hero-overlay bg-opacity-25"></div>
                <motion.div
                    variants={staggerContainer(0.3, 1)}
                    initial='hidden'
                    whileInView={'show'}

                >
                    <div class="hero-content text-white">
                        <div class="max-w-xl lg:pt-26 pt-28">
                            <motion.h1
                                variants={fadeIn('down', 'tween', 0.3, 1.1)}
                                initial='hidden'
                                whileInView={'show'}
                                className='h1 lg:mb-5'
                            >
                                <h1 class="lg:mb-5 lg:text-6xl md:text-3xl text-2xl font-bold text-center">
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={['S', 'E', 'R', 'V', 'I', 'C', 'E', ' ', ' ', ' ', 'D', 'E', 'T', 'A', 'I', 'L', 'S',]}
                                        idx={15}
                                    />
                                </h1>
                                {/* <p class="py-6 lg:text-2xl md:text-2xl sm:text-xl">Everything you need to know about our values and achievements</p> */}
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
                <div className='lg:mt-36 pt-36'>
                    <img className='lg:mt-36 pt-28' src={upimg} alt="" />
                </div>
            </div>
            <ServiceBody />
            <GroupTitle />
            <Group />
            <Footer />
        </div>

    )
}

export default Service