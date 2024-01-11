'use client'

import React from 'react'

import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faPhone, faEnvelope, faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const page = () => {

    const formik = useFormik({
        initialValues: {
          firstName:'',
          lastName: '',
          email: '',
          message: '', // Changed to lowercase 'message' to match the state
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <>
    <main className='  min-h-screen  justify-center bg-green-100 p-5 "' >

        <div className='text-center  mt-10'>
            <h1 className='font-bold text-4xl justify-center text-center  '>Get In Touch</h1>

            <p className='px-10 mt-2 mx-10'>We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow yout rankings, improve brand.</p>
            
            
            </div>

          <div className='container mx-auto bg-white w-full lg:w-2/3 xl:w-1/2 flex flex-col lg:flex-row mt-20 p-4 rounded-lg lg:h-[600px]'>
                <div className='contact bg-green-400 text-white rounded-md justify-center p-4 space-y-3  '> 
                <h1 className='text-center font-bold text-2xl mt-2'>Contact Information</h1>
                <p className='p-3'>We'll create high quality linkable content and build at least 40 high-authority.</p>
                


                <div className=' justify-center max-h-[20px]  gap-2   flex text-center mt-6'>
                <FontAwesomeIcon icon={faPhone} />
{/* Mobile Icon */}
<li className='wrap'>88017797686</li><br/>
<li>88017797686</li>

                </div>

                <div className='flex mt-5 max-h-[20px] text-center gap-2 justify-center '>
                    {/* Email Icon */}
                    <FontAwesomeIcon icon={faEnvelope}  />
                    <p> Support@test.com</p>
                </div>

                <div className='flex mt-5 max-h-[20px] gap-2 text-center justify-center'>
                    {/* Location Icon */}
                    <FontAwesomeIcon icon={faLocationDot}  />
                    <p> New York, USA </p>
                </div>
                </div>
               
                <div className='form flex flex-col  space-y-4'>

                <div className=' p-8 flex   '> 
                    
                    <label className="uppercase flex  " htmlFor="firstName">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="rounded-sm p-2   w-full bg-transparent border-b border-black border-solid outline-none uppercase "
            placeholder="First Name"
          />
          
          <label className="uppercase  " htmlFor="lastName">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="rounded-sm p-2 w-full bg-transparent border-b border-black border-solid outline-none  uppercase "
            placeholder="Last Name"
          />
          </div>

          <div className='p-8 '>
          <label className="uppercase text-green-400  " htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="rounded-sm  min-h-40 bg-transparent   outline-none border-b border-green-400 border-solid w-full  p-2  uppercase "
            placeholder="Your Message"
          />
          </div>

          <div className='m-8'>
            <button type='submit' className='bg-green-400 p-5 rounded-md text-white font-semibold'>Send Message</button>
          </div>
                </div>

            </div>
       
       
    </main>
    
    </>
  )
}

export default page