import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Authentication/SignUp';
import SignIn from './Pages/Authentication/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/purchase/:productId' element={<Purchase />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>

        <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<Profile/>}></Route>
          <Route path="myOrders" element={<MyOrders/>}></Route>
          <Route path="addReview" element={<AddReview/>}></Route>
        </Route>

      </Routes>
      <Footer/>
      
      <ToastContainer />
    </div>
  );
}

export default App;
