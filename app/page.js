'use client'

import Image from 'next/image'
import { useFormik } from 'formik'

export default function Home() {


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',

      email: '',
      phone: '',
      city: '',
      Message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center  bg-slate-800 p-20">
     <div className='w-[600px] flex-1 rounded-md overflow-hidden  justify-center h-auto bg-slate-300 '>
     <form  onSubmit={formik.handleSubmit} 
     className='flex flex-col flex-nowrap p-10 gap-2 rounded-sm'>
       <label htmlFor="firstName">First Name </label>
       <input
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label htmlFor="phone">phone</label>
       <input
         name="phone"
         type="tel"
         onChange={formik.handleChange}
         value={formik.values.phone}
       />
       <label htmlFor="city">City</label>
       <input
         name="city"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.text}
       />
       <label htmlFor="message">Message</label>
       <textarea
         name="message"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Message}
       />
 
       <button
       className='bg-green-700 h-8 rounded-sm mt-4'
       type="submit">Submit</button>
     </form>
      </div>
    </main>
  )
}
