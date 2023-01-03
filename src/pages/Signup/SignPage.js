import React, {useState} from 'react';
import './Signup.css';

const SignPage = () => {
    const [desc, setDesc] = useState('description');
    
    return (
        <div className='mx-36'>
            <div className='core-box my-5 mx-36'>

                <div className='contact-info'>
                    <div className=' pt-16 px-10'>
                        <h3 className='text-xl'>Contact Information</h3>
                        <div>
                            <div className='grid grid-cols-2 gap-5'>
                                <fieldset>
                                    <label className='text-sm' htmlFor="#">First Name <em>*</em></label>
                                    <input type="text" className='text-xs border border-gray-400 py-1 px-2' required />
                                </fieldset>
                                <fieldset>
                                    <label className='text-sm' htmlFor="">Last Name <em>*</em></label>
                                    <input type="text" className='border text-xs border-gray-400 py-1 px-2' required />
                                </fieldset>
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <fieldset>
                                    <label className='text-sm' htmlFor="#">Email <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                                <fieldset>
                                    <label className='text-sm' htmlFor="">Company/Individual/Website Name <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <fieldset>
                                    <label className='text-sm' htmlFor="#">Example Offer Landing Page / Product Page <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                                <fieldset>
                                    <label className='text-sm' htmlFor="">Website <em>*</em></label>
                                    <input type="text" placeholder='http(s)://' className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                            </div>

                            {/* <fieldset>
                    <label htmlFor="note">Your Message</label>
                    <textarea name="note" id="note" cols="4" rows="10"></textarea>
                </fieldset> */}
                        </div>
                    </div>

                    <div className=' pt-5 px-10'>
                        <h3 className='text-xl'>Mailling Address</h3>
                        <div action="#">
                            <div className='grid grid-cols-2 gap-5'>
                                <fieldset>
                                    <label className='text-sm' htmlFor="#">Address Line 1 <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                                <fieldset>
                                    <label className='text-sm' htmlFor="">Address Line 2</label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <fieldset>
                                    <label className='text-sm' htmlFor="#">City <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                                <fieldset>
                                    <label className='text-sm' htmlFor="">Zip/Postal Code <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <fieldset>
                                    <label className='text-sm' htmlFor="#">Country <em>*</em></label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                                <fieldset>
                                    <label className='text-sm' htmlFor="">Phone Number</label>
                                    <input type="text" className='border border-gray-400 text-xs py-1 px-2' required />
                                </fieldset>
                            </div>

                            {/* <fieldset>
                    <label htmlFor="note">Your Message</label>
                    <textarea name="note" id="note" cols="4" rows="10"></textarea>
                </fieldset> */}
                        </div>
                    </div>
                    <div className='w-1/2 pt-5 px-10'>
                        <h3 className='text-xl'>Additional Information</h3>
                        <label className='text-sm ' htmlFor="#">Referral Code</label>
                        <input type="text" className='border border-gray-400 text-xs  py-1 px-2' />
                    </div>
                    <div className='w-1/2 py-10 px-10'>
                        <h3>Terms and Conditions</h3>
                        <label className='text-sm' htmlFor="platform_terms">Everflow Terms</label>
                        <textarea type="text" name="" value={desc} onChange={e => setDesc(e.target.value)} id="platform_terms" cols="30" rows="10"></textarea>
                        
                    </div>
                    {/* <div className='checkbox'>
                            <label htmlFor="" className='text-sm'> I agree to Everflow's Terms of Service, as applicable <em>*</em></label>
                            <input type="text" className=''/>
                        </div> */}
                    <div className='text-center bg-[#355990] mx-16 mb-5'>
                        <button className='uppercase py-1 text-white'>Submit Application</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignPage