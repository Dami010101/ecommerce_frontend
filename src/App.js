import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Banner from './component/banner/Banner';
import ProductDetail from './pages/productdetails/ProductDetail';
// import StaticBanner from './component/banner/StaticBanner';
import Register from './pages/register/Register';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Cart from './component/cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      {/* <StaticBanner/> */}
      <Banner/>
      <Routes>
        <Route element={<Home/>} path='/'/>    
        <Route element={<About/>} path='/About'/>    
        <Route element={<ContactUs/>} path='/ContactUs'/>    
        <Route element={<Cart/>} path='/Cart'/>    
        <Route element={<Signin/>} path='/Signin'/>    
        <Route element={<Register/>} path='/Register'/>    
        <Route element={<ProductDetail/>} path='/ProductDetails'/>    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
