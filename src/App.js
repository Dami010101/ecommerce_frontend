import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Productdetails from './pages/productdetails/Productdetails';
import Banner from './component/banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      {/* <Banner/> */}
      <Routes>
        <Route element={<Home/>} path='/'/>    
        <Route element={<Signin/>} path='/Signin'/>    
        <Route element={<Productdetails/>} path='/Productdetails'/>    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
