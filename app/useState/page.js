'use client'

import { useState } from 'react';

export default function page() {
  const [name, setName] = useState('Sam');
  const [age, setAge] = useState(22);


  const [form, setForm] = useState({
    firstName: 'Sattyam',
    lastName: 'Samania',
    email: 'test@gmail.com',
  });


  const increment=()=>{
    setAge(a => a + 1)
  }
  return (
    <>
{/* Using Number and String  */}
    <div className='w-400 p-4 '>


      <input
      className='border border-black'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className='bg-blue-600 rounded' onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p className='m-3'>Hello, {name}. You are {age}.</p>
      </div>

{/* Using Objects  */}
      <div className=''>
      <label>
        First name:
        <input
        className='border border-black'
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
        className='border border-black'
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
        className='border border-black'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
      </div>
    </>
  );
}
