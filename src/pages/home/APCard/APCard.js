import React from 'react';
import img1 from '../../../assets/successful-businesswoman.jpg';
import img2 from '../../../assets/photographer.jpg';

const APCard = () => {
    return (

        <div className='flex min-h-screen items-center justify-center bg-neutral-900'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full object-cover duration-300 group-hover:scale-125 transition-transform' src={img1} alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                        <h1 className='font-serif text-3xl font-bold text-white'>Camplejeune</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste blanditiis hic ipsa!</p>
                        <button className='font-com rounded-full shadow-black/60 bg-neutral-900 py-3.5 text-sm capitalize text-white'></button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full object-cover duration-300 group-hover:scale-125 transition-transform' src={img2} alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                        <h1 className='font-serif text-3xl font-bold text-white'>Card Repair</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste blanditiis hic ipsa!</p>
                        <button className='font-com rounded-full shadow-black/60 bg-neutral-900 py-3.5 text-sm capitalize text-white'></button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full object-cover duration-300 group-hover:scale-125 transition-transform' src={img1} alt="" />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                        <h1 className='font-serif text-3xl font-bold text-white'>Home Security</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste blanditiis hic ipsa!</p>
                        <button className='font-com rounded-full shadow-black/60 bg-neutral-900 py-3.5 text-sm capitalize text-white'></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default APCard