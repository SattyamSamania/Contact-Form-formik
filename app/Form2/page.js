'use client'

import Image from 'next/image';
import { useFormik } from 'formik';

const page =()=> {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      message: '', // Changed to lowercase 'message' to match the state
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-800 p-5 sm:p-10">
      <div className="w-full sm:max-w-md bg-slate-300 rounded-md overflow-hidden">
        <form onSubmit={formik.handleSubmit} className="p-5 sm:p-10 space-y-4  ">
          <h1 className="font-bold text-3xl uppercase text-center space-y-3">Contact Form</h1>
         
         
         <div> <label className="uppercase text-red-400  " htmlFor="firstName">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="rounded-sm p-2 w-full uppercase placeholder-black "
            placeholder="First Name"
          />
          </div>
          <div>
          <label className="uppercase text-red-400 " htmlFor="lastName">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="rounded-sm p-2 w-full uppercase placeholder-black"
            placeholder="Last Name"
          />
          </div>
          <div>
          <label className="uppercase text-red-400" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="rounded-sm p-2 w-full uppercase placeholder-black"
            placeholder="Email"
          />
          </div>
          <div>
          <label className="uppercase text-red-400" htmlFor="phone">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="rounded-sm p-2 w-full uppercase placeholder-black"
            placeholder="Phone Number"
          />
          </div>
          <div>
          <label className="uppercase text-red-400" htmlFor="city">
            City
          </label>
          <input
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
            className="rounded-sm p-2 w-full uppercase placeholder-black"
            placeholder="City Name"
          />
          </div>
          <div>
          <label className="uppercase text-red-400" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="rounded-sm p-2 min-h-32 w-full uppercase placeholder-black"
            placeholder="Your Message"
          />
          </div>
          <button
            className="bg-green-700 h-10 text-white uppercase text-xl font-semibold rounded-sm w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default page;