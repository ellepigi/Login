import React from 'react'
import { auth } from '../firebase_setup/firebase.js'
import { signOut } from 'firebase/auth' 


export default function Home() {
    
      
  return (
    <div >
        <h1>Home</h1>

        <button className='mt-4' type='button' onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}
