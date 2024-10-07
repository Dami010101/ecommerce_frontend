import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Cart from './component/cart/Cart';
import Footer from './component/footer/Footer';
import SignIn from './pages/account/SignIn';
import ProductInfo from './pages/productInfo/ProductInfo';
import SignUp from './pages/account/SignUp';
import ResetPassword from './pages/account/ResetPassword';
// import Products from './pages/products/Products';
import SignOut from './pages/account/SignOut';
import ProductDescription from './pages/productDescription/ProductDescription';
import UserProfile from './pages/userProfile/UserProfile';
import AdminProfile from './pages/adminProfile/AdminProfile';
import ProductProfile from './pages/products/ProductProfile';
import ProductDisplay from './pages/productInfo/ProductDisplay';
import CountryList from './pages/account/CountryList';
import AdminSignIn from './pages/adminProfile/AdminSignIn';
import AdminSignUp from './pages/adminProfile/AdminSignUp';
import AdminSignOut from './pages/adminProfile/AdminSignOut';
import Products from './pages/products/Products';
import { CartProvider } from './component/cart/CartContext';
import OrderList from './component/orderManagement/OrderList';
import { OrderProvider } from './component/orderManagement/OrderContext';
import SuperAdminSignIn from './pages/superAdminProfile/SuperAdminSignIn';
import SuperAdminSignUp from './pages/superAdminProfile/SuperAdminSignUp';
import SuperAdminSignOut from './pages/superAdminProfile/SuperAdminSignOut';
import SuperAdminProfile from './pages/superAdminProfile/SuperAdminProfile';
export const URL = process.env.BACKEND_URL

function App() {
  return (
    <div className="App">
      <CartProvider>
      <OrderProvider>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>    
        <Route element={<About/>} path='/About'/>    
        <Route element={<ContactUs/>} path='/ContactUs'/>    
        <Route element={<Cart/>} path='/Cart'/>    
        <Route element={<SignIn/>} path='/SignIn'/>    
        <Route element={<SignUp/>} path='/SignUp'/>    
        <Route element={<SignOut/>} path='/SignOut'/>    
        <Route element={<ResetPassword/>} path='/ResetPassword'/>    
        <Route element={<Products/>} path='/Products'/>    
        <Route element={<ProductInfo/>} path='/product/:id'/>    
        <Route element={<UserProfile/> } path='/UserProfile'/>    
        <Route element={<AdminProfile/> } path='/AdminProfile'/>    
        <Route element={<ProductProfile/> } path='/ProductProfile'/>    
        <Route element={<ProductDescription/>} path='/ProductDes'/>    
        <Route element={<ProductDisplay/> } path='/ProductDisplay'/>    
        <Route element={<CountryList/> } path='/CountryList'/>    
        <Route element={<AdminSignIn/> } path='/AdminSignIn'/>    
        <Route element={<AdminSignUp/> } path='/AdminSignUp'/>    
        <Route element={<AdminSignOut/> } path='/AdminSignOut'/>    
        <Route element={<SuperAdminSignIn/> } path='/SuperAdminSignIn'/>    
        <Route element={<SuperAdminSignUp/> } path='/SuperAdminSignUp'/>    
        <Route element={<SuperAdminSignOut/> } path='/SuperAdminSignOut'/>    
        <Route element={<SuperAdminProfile/> } path='/SuperAdminProfile'/>    
        <Route element={<OrderList/> } path='/OrderList'/>    
      </Routes>
      <Footer/>
      </BrowserRouter>
      </OrderProvider>
      </CartProvider>
    </div>
  );
}

export default App;
