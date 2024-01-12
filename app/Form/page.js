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
            <main className={styles.main}>
                <div className={styles.head}>
                    <div>
                        <h1 className='font-semibold text-3xl  '>Fale Connosco</h1>
                        <div></div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.Info}>
                        <div className={styles.infoHeading}>
                            <p>ATENDIMENTO</p>
                            <p>AO CONSUMIDOR</p>
                        </div>
                        <div>
                            <div><p>+351</p></div>
                            <div className='font-bold text-4xl'>
                                <p>229</p>
                                <p>999</p>
                                <p>435</p>
                            </div>
                            <div className="bg-transparent w-10 border-4  mt-3  border-b text-white  border-blue-600 border-solid"></div>
                        </div>
                        <div>
                            <h2 className='font-semibold text-2xl mt-10'>
                                MORADA
                            </h2>
                            <div className='mt-4 '>
                                <p>RUS Joadko Anion Morenica</p>
                                <p>n's 96 104</p>
                                <p>4470-078 moreria-Mais</p>
                                <p>Portugal</p>

                                <div className="bg-transparent w-10  mt-3  border-b text-white  border-blue-600 border-solid border-4"></div>                </div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div><h1 className="text-white mb-3 font-semibold">ENVIE-NOS UMA MENSAGEM</h1>
                        </div>
                        <div className={styles.Inputs}>
                            <div>
                                <span>Name</span>
                                <input type='text' />
                            </div>
                            <div>
                                <span>email</span>
                                <input type='text' />
                            </div>
                            <div>
                                <span>Address</span>
                                <input type='text' />
                            </div>
                            <div>
                                <span>Message</span>
                                <div style={{ flex: 4 }} />
                            </div>
                        </div>

                        <div className='mt-2'>
                            <textarea
                                name="message"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                className=" w-full  bg-transparent max-h-[60px] border-b border-white border-solid outline-none uppercase "
                                placeholder="YOUR MESSAGE"
                            />
                        </div>
                        <div className='flex justify-between mt-3 text-white  '>
                            <div className={styles.numberInput}>
                                <span>3 + 1 =</span>
                                <input type='number' className={styles.number} />
                            </div>
                            <button className={styles.btn}>Enter</button>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default page