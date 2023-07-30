import {useState, useEffect} from 'react'
import {auth} from './firebase_setup/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import {AuthProvider} from './context/AuthContext'
import PrivateRoute, { privateRoute } from './PrivateRoute'

import './App.css';
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';


function App() {


  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])

   


  return (
    <div className="App flex h-screen justify-center items-center ">
             <AuthProvider value={{currentUser}}>

       <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/home" element={
        <PrivateRoute>
        <Home/>
        </PrivateRoute>} />
    

       </Routes>

       </AuthProvider>

       

    </div>
  );
}

export default App;
