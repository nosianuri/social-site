import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='border-2'>
     {/* <div className='flex justify-center bg-[#003144]'>
    <i class="fa-sharp fa-solid fa-play rotate-90 text-[#ee6c4d] text-6xl "></i>
    </div> */}
    <div className='px-10  bg-[#003144] relative'>
    <div className='top-[-42px] left-[50%]  translate-x-[-50%] bg-[#FD5D14] w-[70px] h-[70px] footer-clip absolute '></div>
   
    <div className='h-[40px] w-[40px] relative bg-[#FD5D14] -top-[-300px] right-[100px] rotate-45 '></div>
      <div className='text-center mb-5'>
        <h1 className='lg:text-3xl text-2xl font-bold text-white'>YOUR TRUSTED PARTNER SINCE 2019</h1>
        <p className='text-white lg:text-lg mt-3'>Made With Love 🤍 All Around The World</p>
      </div>
      <footer class="footer lg:px-32 text-white">

        <div className=''>
          <span class="lg:text-xl text-lg text-bold">CONTACT INFORMATION</span>
          <div>
          <i class="fa-solid fa-square-phone pr-2 lg:text-xl"></i>
          <a className='hover:text-[#FD5D14] lg:text-md hover:no-underline' href="tel:+14356251961">Phone:(435) 625-1961</a>
          </div>
          <div>
          <i class="fa-solid fa-envelope pr-2 lg:text-xl"></i>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">contact@rayadvertising.com</a>
          </div>
          <div className='flex mb-2'>
          <i class="fa-solid fa-location-dot pr-2 lg:text-xl"></i>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline"><div>
          1267 Willis ST STE 200 <br /> Redding CA 96001 USA
          </div></a>
          </div>
          

        </div>
        <div className=''>
          <span class="lg:text-xl text-lg text-bold ">COPYRIGHT</span>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">About Us</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Privacy Policy</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Terms & Condition</a>
          
        </div>
        <div>
          <span class="lg:text-xl text-lg text-bold  ">MEDIA</span>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">FAQ</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/expertise' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Blog</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/contact' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Event</a>
          
        </div>
        <div>
          <span class="lg:text-xl text-lg text-bold uppercase ">Home</span>
          <a href='/about' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Media</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/expertise' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Advertisers</a>
          <div className='lg:w-[200px] w-[50px] h-[1px] bg-gray-700'></div>
          <a href='/contact' class="link link-hover hover:text-[#FD5D14] lg:text-md hover:no-underline">Publishers</a>

        </div>




      </footer>
      <div className='lg:px-16'>
      <div className='flex lg:gap-3 gap-2 justify-center py-5 border-2 border-[#003144] border-y-gray-700 '>
        <div className=' lg:text-2xl px-2 py-1 font-semibold text-white bg-[#3b5998] rounded-lg'>
          <a href="https://www.facebook.com/rayadvertisingllc"><i class="fa-brands fa-facebook text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className=' lg:text-2xl font-semibold text-white px-2 py-1 bg-[#00aff0] rounded-lg'>
          <a href="https://join.skype.com/invite/TVHXGcGIlXK6"><i class="fa-brands fa-skype  text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className='bg-[#1da1f2] px-2 py-1 rounded-lg'>
          <a href="https://mobile.twitter.com/rayadvertising"><i class="fa-brands fa-twitter  text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className='bg-[#0077b5] px-2 py-1 rounded-lg'>
          <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin  text-[#fff] lg:text-2xl "></i></a>
        </div>
        <div className='bg-[#bd081c] px-2 py-1 rounded-lg'>
          <a href="https://www.pinterest.com/rayadvertising/"><i class="fa-brands fa-pinterest  text-[#fff] lg:text-2xl "></i></a>
          
        </div>
        <div className='bg-[#6A46C5] px-2 py-1 rounded-lg'>
          <a href="https://www.instagram.com/rayadvertisingllc/"><i class="fa-brands fa-instagram text-[#fff] lg:text-2xl "></i></a>
          
        </div>
        <div className='bg-[#35465c] px-2 py-1 rounded-lg'>
          <a href="https://www.tumblr.com/rayadvertisingllc"><i class="fa-brands fa-tumblr text-[#fff] lg:text-2xl  "></i></a>
        </div>
      </div>
      </div>
      <div className=' text-white lg:text-sm text-center lg:pl-10 py-5'>
        <p>Copyright© 2022 Ray Advertising LLC | All rights reserved</p>
      </div>
      {/* <div className='fixed top-56 left-[-2px]'>
        <p className='font-com lg:text-2xl font-semibold text-white bg-[#FF4B1B] '>
          <a href="https://www.facebook.com/rayadvertisingllc/"><i class="fa-brands fa-facebook pl-3 text-[#fff] lg:text-2xl"></i></a>
        </p>
        <p className='bg-[#FF4B1B] '>
          <a href="/"><i class="fa-brands fa-twitter pl-3 text-[#fff] lg:text-2xl"></i></a>
        </p>
        <p className='bg-[#FF4B1B]'>
          <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin pl-3 text-[#fff] lg:text-2xl"></i></a>
        </p>
       
      </div> */}
      </div>
      {/* <footer class="  p-4 bg-primary text-base-content ">
<div className='border-t border-base-300'>
<div className='flex justify-between m-4 pt-5 px-5'>
    
<div className=' text-white text-sm'>
    <p>Copyright© 2022 Ray Advertising LLC | All rights reserved</p>
  </div>
    <div className='text-white'>Follow Us: <span className='text-lg '>
    <a href="https://www.facebook.com/rayadvertisingllc/"><i class="fa-brands fa-facebook pl-3 text-[#FFD124]"></i></a>
    
    <a href="https://www.linkedin.com/company/rayadvertising"><i class="fa-brands fa-linkedin  text-[#FFD124]"></i></a>
    
    <i class="fa-brands fa-twitter  text-[#FFD124]"></i>
    </span></div>
    </div>

  
  </div>
</footer> */}
    </div>
  )
}

export default Footer;