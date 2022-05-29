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
import Reviews from './Pages/Reviews/Reviews';
import RequireAuth from '../src/Pages/Authentication/RequireAuth';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import NotFound from './Pages/Shared/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Blog from './Pages/Blog/Blog';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Authentication/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />

        <Route path='/purchase/:productId' element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />

        <Route path='reviews' element={<Reviews />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
        </Route>
        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
