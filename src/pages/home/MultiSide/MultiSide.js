import React, { useState } from 'react';
import media from '../../../assets/ntw.jpg';


const white = {background:'white'}
const blue = {background:'blue'}

const MultiSide = () => {
  const [color, setColor] = useState(white);
    return (

         <div style={{
        background: `url(${media})`
      }} className=' !bg-cover !bg-no-repeat '>
        <div className='py-32 pl-32'>
        <h1 className='text-3xl hover:pl-10 text-white mt-5'>Affiliate Network<i class="fa-solid fa-arrow-right pl-3"></i></h1>
        <h2 className='text-3xl text-white mt-5 hover:pl-10'>Pay Per Call<i class="fa-solid fa-arrow-right pl-3"></i></h2>
        <h3 className='text-3xl text-white mt-5 hover:pl-10'>Lead Genaration<i class="fa-solid fa-arrow-right pl-3"></i></h3>
        <h4 className='text-3xl text-white mt-5 hover:pl-10'>Media Buting<i class="fa-solid fa-arrow-right pl-3"></i></h4>
        </div> 
        {/* <div className='bg-1'></div>
        <div className='bg-2'></div> */}
</div>
        // <div id="wrap">
        //     <div class="container-side">

        //         <ul>
        //             <li>
        //                 <div class="container-item">
        //                     <a href="#" class="link">City Living</a>
        //                     <div class="image">
        //                         <img src="https://picsum.photos/id/1047/3264/2448" alt="image" />
        //                     </div>
        //                 </div>
        //             </li>

        //             <li>
        //                 <div class="container-item">
        //                     <a href="#" class="link">Wilderness</a>
        //                     <div class="image">
        //                         <img src="https://picsum.photos/id/1043/5184/3456" alt="image" />
        //                     </div>
        //                 </div>
        //             </li>

        //             <li>
        //                 <div class="container-item">
        //                     <a href="#" class="link">Valley of Mist</a>
        //                     <div class="image">
        //                         <img src="https://picsum.photos/id/1064/4236/2819" alt="image" />
        //                     </div>
        //                 </div>
        //             </li>

        //             <li>
        //                 <div class="container-item">
        //                     <a href="#" class="link">Beauty of Nature</a>
        //                     <div class="image">
        //                         <img src="https://picsum.photos/id/1024/1920/1280" alt="image" />
        //                     </div>
        //                 </div>
        //             </li>
        //         </ul>

        //     </div>
        // </div>



    )
}

export default MultiSide