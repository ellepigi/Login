import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';

function App() {
  return (
    <div className="App flex h-screen justify-center items-center ">
       <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/home" element={<Home/>} />

       </Routes>

    </div>
  );
}

export default App;
