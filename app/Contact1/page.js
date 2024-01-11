'use client'

import React from 'react'
import { useFormik } from 'formik';
import styles from './Contact1.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faPhone, faEnvelope, faLocationDot
} from '@fortawesome/free-solid-svg-icons';

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
            <section className={styles.section}>
                <div className={styles.head}>
                    <h1 className='font-bold text-2xl'>
                        Get In Touch
                    </h1>
                    <p className='mt-2'>We'll create high-quality linkable content and build at least 40 high-authority links to each  asset, paving the way for you to grow yout rankings, improve brand.</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.contact}>
                        <div className=''>
                            <h1 className='font-bold text-2xl '>Contact Information</h1>
                            <p className='mt-3 '>We'll create high quality linkable content and<br/> build at least 40 high-authority.</p>

                        </div>
                        <div className='content flex-col  space-y-7'>
                            <div className=' mt-7 flex gap-4 '><FontAwesomeIcon icon={faPhone} className='mt-3' />
                                <div>
                                    <p>.8801779717686</p>
                                    <p>.8801779717686</p>
                                </div>

                            </div>
                            <div className='flex gap-4'>
                                <FontAwesomeIcon icon={faEnvelope} className='mt-1' />
                                <div>
                                    <p>Support@test.com</p>
                                </div>
                            </div>
                            <div className='flex gap-4'> <FontAwesomeIcon icon={faLocationDot} />

                                <div >
                                    <p>New York, USA</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={styles.form}>
                        <div>
                            <div className='flex gap-6'>
                                <div>
                                    <label className="uppercase flex  " htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        className="rounded-sm p-2   bg-transparent border-b border-black border-solid outline-none uppercase "
                                        placeholder="First Name"
                                    />

                                </div>
                                <div>
                                    <label className="uppercase  " htmlFor="email">
                                        Your Email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className="rounded-sm p-2 w-full bg-transparent border-b border-black border-solid outline-none  uppercase "
                                        placeholder="EMAIL"
                                    />
                                </div>
                            </div>
                            <div className=' mt-8 space-y-5'>
                                <div>
                                    <label className="uppercase flex  " htmlFor="firstName">
                                        Your Subject
                                    </label>
                                    <input
                                        name="subject"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.subject}
                                        className="rounded-sm p-2   w-full bg-transparent border-b border-black border-solid outline-none uppercase "
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label className="uppercase flex text-green-400  " htmlFor="firstName">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        className="rounded-sm p-2   w-full bg-transparent max-h-[60px] border-b border-green-400 border-solid outline-none uppercase "
                                        placeholder="Write here your Message"
                                    />
                                </div>
                                <button className='bg-green-400 p-3 mt-5 rounded-md pointer text-white'>Send Message</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default page