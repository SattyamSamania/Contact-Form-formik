'use client'

import React from 'react'
import styles from './Form.module.css'
import Office from '@/public/Office.jpg'
import Image from 'next/image'
import { useFormik } from 'formik';


const page = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            subject: '',
            message: '', // Changed to lowercase 'message' to match the state
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
  return (
   <>

   <main className={styles.main}
  
   >
    <Image
    src={Office}
    layout='fill'
    alt='Office_Image'
    className='z-[-10]'
    />
    <div className={styles.head}>
        <h1 className='font-semibold text-3xl  '>Fale Connosco
        <hr/></h1>

    </div>

    <div className={styles.container}>
        <div className={styles.Info}>
            <div  className='flex-start space-y-5'>
            <div>    <h1>ATENDIMENTO AO CONSUMIDOR</h1></div>
            <div className='gap-3'>
          <div>      <p>+351</p></div>
          <div className='font-bold text-4xl'>
                <p>229</p>
                <p>999</p>
                <p>435</p>
                </div>
                <hr className='w-5 mt-3'/>
                </div>

<div>
                <h2 className='font-semibold text-2xl'>
                    MORADA
                </h2>

<div className='mt-4'>
                <p>RUS Joadko Anion Morenica</p>
                <p>n's 96 104</p>
                <p>4470-078 moreria-Mais</p>
                <p>Portugal</p>

                <hr className='w-5 mt-3'/>
                </div>
                </div>

                
            </div>
        
        
        </div>
        <div className={styles.contact}>

            <div className='flex-col'>
                <div><h1>ENVIE-NOS UMA MENSAGEM</h1></div>
                <div className={styles.Inputs}>

                    <div className='flex space-x-3 gap-4'><label className=''>Name</label>
                    <input
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        className="   bg-transparent border-b border-black border-solid outline-none uppercase "
                                        placeholder="First Name"
                                    />
                                    </div>
                                    <div className='flex space-x-3 gap-4'><label className=''>Email</label>
                    <input
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className="   bg-transparent border-b border-black border-solid outline-none uppercase "
                                        placeholder="Your EMail"
                                    />
                                    </div>

                                    <div className='flex space-x-3 gap-4'><label className=''>CITY</label>
                    <input
                                        name="city"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.city}
                                        className="   bg-transparent border-b border-black border-solid outline-none uppercase "
                                        placeholder="city"
                                    />
                                    </div>


                                    

                </div>

                

            </div>
        </div>
    </div>

    </main>
   </>
  )
}

export default page