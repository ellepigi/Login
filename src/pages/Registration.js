import React from 'react'
import { useState } from 'react'
import {auth} from '../firebase_setup/firebase.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Registration() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

     const validatePassword = () => {
         let isValid = true
         if (password !== '' && confirmPassword !== ''){
           if (password !== confirmPassword) {
             isValid = false
             setError('Le password non coincidono')
           }
         }
         return isValid
       }

    const register = e => {
        e.preventDefault()
        setError('')
        if(validatePassword()) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
                navigate('/home');
              })
            .catch(err => setError('Email assente'))
        }
        // setEmail('')
        // setPassword('')
        // setConfirmPassword('')
      }

  return (
    <div>
    <form className="w-full max-w-sm" onSubmit={register}>
<div className="md:flex md:items-center mb-6">
<div className="md:w-1/3">
  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
    Email
  </label>
</div>
<div className="md:w-2/3">
  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
</div>
</div>
<div className="md:flex md:items-center mb-6">
<div className="md:w-1/3">
  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
    Password
  </label>
</div>

<div className="md:w-2/3">
  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="******************"/>
</div>
</div>
<div className="md:flex md:items-center mb-6">
<div className="md:w-1/3">
  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-confirm-password">
    Conferma Password
  </label>
</div>

<div className="md:w-2/3">
  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-confirm-password" type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="******************"/>
</div>

</div>

<div className="md:flex flex-col items-end md:items-center ">
  <div>
   {error && <h1 className='text-red-500' >{error}</h1>}
  </div>
  <div class="flex flex-row-reverse mt-4">
  <Link to="/"><button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
    Indietro
  </button>
  </Link>
  <button className="shadow mr-4 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
    Registrati
  </button>
  </div>
</div>
<div className="flex mt-4 justify-center">
 
</div>
</form>
</div>
  )
}
