import React, { useEffect, useRef, useState } from 'react'
import banner from '../../../assets/homepage header.png';
import "animate.css";
import './BannerBody.css';
import AnimatedLetters from '../../../shared/AnimatedLetters/AnimatedLetters';
import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../shared/variants';

const BannerBody = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    return (
        <div style={{
            background: `url(https://i.ibb.co/fdJFSkM/homepage-header.png)`
        }} className='lg:h-screen !bg-no-repeat !bg-cover ' >
            <div className=''>
                <div className=' lg:pt-[180px] md:pt-[160px] pt-[90px]'>

                    <motion.div
                        variants={staggerContainer(0.3, 1)}
                        initial='hidden'
                        whileInView={'show'}
                    >
                        <div className='p-16'>
                            <div className=' text-center  lg:mx-32'>
                                <motion.div
                                    variants={fadeIn('down', 'tween', 0.2, 1.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className=' text-[18px] lg:text-[20px] font-primary lg:font-medium mb-1'
                                >
                                    <div className='flex w-full justify-center items-center'>
                                        <div className='lg:w-[200px] w-[50px] h-[1px] bg-white'></div>
                                        <div class="mx-4 text-white lg:text-lg text-xs"> RAY ADVERTISING LLC </div>
                                        <div className='lg:w-[200px] w-[50px] h-[1px] bg-white'></div>
                                    </div>

                                </motion.div>
                                <motion.h1
                                    variants={fadeIn('down', 'tween', 0.2, 1.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className='h1 mb-2'
                                >
                                    <h1 className='mx-w-lg lg:text-[50px] text-[20px] font-[900] text-white'>
                                    PERFECT MARKETING WITH PERFECT PARTNER
                                        {/* <AnimatedLetters
                                            letterClass={letterClass}
                                            strArray={['P', 'E', 'R', 'F', 'E', 'C', 'T', ' ', ' ', 'M', 'A', 'R', 'K', 'E', 'T', 'I', 'N', 'G', ' ', ' ', 'W', 'I', 'T', 'H', ' ', ' ', 'P', 'E', 'R', 'F', 'E', 'C', 'T', ' ', ' ', 'P', 'A', 'R', 'T', 'N', 'E', 'R']}
                                            idx={15}
                                        /> */}
                                    </h1>
                                </motion.h1>
                                <motion.p
                                    variants={fadeIn('down', 'tween', 0.4, 1.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className='text-center'
                                >
                                    <p className='lg:text-lg text-white'>Aims to be the final destination for our advertisers and affiliate partners.</p>
                                </motion.p>

                            </div>

                            <div className='uppercase flex justify-center gap-5 lg:hidden block mt-5'>
                                <h2 className='btn text-md text-white bg-[#FD5D14] hover:bg-[#e36912]'>Publisher</h2>
                                <h2 className='btn text-md text-white bg-[#FD5D14] hover:bg-[#e36912]'>Advertiser</h2>
                            </div>

                            <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
                                <div className='relative lg:mt-8 mt-8'>

                                    {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-12 md:px-10'>
                        <div className='bannerbody-img '>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={bannerimg} alt="Header Img" />
                                    </div>}
                            </TrackVisibility>   
                        </div>
                       
                    </div> */}

                                    <div className=' relative lg:left-[1120px] left-[120px] text-white'>
                                        <div className='scrollarrow'>
                                            <i class="fa-solid fa-arrow-down text-3xl "></i>
                                        </div>
                                        <div className='relative right-16'>
                                            {/* <h1 className='scroll'>scroll</h1> */}
                                        </div>

                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                {/* <Wave mask="url(#mask)" fill="#8a49ff"
                paused={false}
                options={{
                    height: 0,
                    amplitude: 40,
                    speed: 0.35,
                    points: 8
                }}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white" />
                        <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    <mask id="mask">
                        <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
                    </mask>
                </defs>
            </Wave> */}

            </div>
        </div>
    )
}

export default BannerBody;