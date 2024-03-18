import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrderDataPage from './pages/UserOrderDataPage';
import UserProfilePage from './pages/UserProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected><Home></Home></Protected>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/cart',
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: '/checkout',
    element: <Protected><CheckoutPage></CheckoutPage></Protected>,
  },
  {
    path: '/product-detail/:id',
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: '/order-success/:id',
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: '/orders',
    element: <UserOrderDataPage></UserOrderDataPage>,
  },
  {
    path: '/profile',
    element: <UserProfilePage></UserProfilePage>,
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    } 
  },[dispatch,user]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
