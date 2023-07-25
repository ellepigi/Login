import React, { useContext } from 'react'
import { auth } from '../firebase_setup/firebase.js'
import { signOut } from 'firebase/auth' 
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.js'
 

export default function Home() {

  const navigate = useNavigate();
  const currentUser = useContext(AuthProvider);


  function logOut() {
        signOut(auth);
        navigate('/');
        console.log(currentUser)

  }
    
      
  return (
    <div >
        <h1>Home</h1>

        <button className='mt-4' type='button' onClick={() => logOut()}>Logout</button>
    </div>
  )
}
