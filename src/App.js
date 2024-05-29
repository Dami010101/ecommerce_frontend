import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Cart from './component/cart/Cart';
import Footer from './component/footer/Footer';
import SignIn from './pages/account/SignIn';
import ProductInfo from './pages/productInfo/ProductInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>    
        <Route element={<About/>} path='/About'/>    
        <Route element={<ContactUs/>} path='/ContactUs'/>    
        <Route element={<Cart/>} path='/Cart'/>    
        <Route element={<SignIn/>} path='/SignIn'/>    
        <Route element={<Register/>} path='/Register'/>    
        <Route element={<ProductInfo/>} path='/ProductInfo'/>    
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
