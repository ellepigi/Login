import React, { useContext } from 'react'
import { auth } from '../firebase_setup/firebase.js'
import { signOut } from 'firebase/auth' 
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../context/AuthContext.js'


export default function Home() {

  const navigate = useNavigate();
  const { currentUser }  = useAuthValue();


  


  function logOut() {
        signOut(auth);
        navigate('/');

  }
    
      
  return (
    <div className='flex flex-col items-center'>
        <h1>Profile</h1>

        <h1 className='mt-4'>Email: {currentUser.email}</h1>
          
        <button className='mt-4 text-blue-500' type='button' onClick={() => logOut()}>Logout</button>
    </div>
  )
}
