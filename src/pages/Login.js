import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase_setup/firebase.js'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext.js'


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('') ;
  const [error, setError] = useState('');
  const navigate = useNavigate()


  useEffect(() => {
  console.log(error);
}, [error]);


  const login = e => {
    e.preventDefault();
    setError(''); 
    

    signInWithEmailAndPassword(auth, email, password)
    .then(
      () => {navigate('/home'); }
    )

    .catch(error => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/invalid-email') {
        setError('L\'email non esiste');
      } else if (errorCode === 'auth/wrong-password') {
        setError('Password errata');
      } else {
        setError(errorMessage);
      }
    });
    

  }


  return (
    <div>
        <form className="w-full max-w-sm" onSubmit={login}>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={email} onChange={e => setEmail(e.target.value)} />
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
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" >
      Login
       </button>
    </div>
  
  </div>
  <div className="flex flex-col mt-4 items-center">
      {error && <h1 className="text-red-500">{error}</h1>} 
      <h4>Non hai un account? <Link to="/registration" className="text-blue-500">Registrati</Link></h4>
     
    </div>
</form>
    </div>
  )
}
