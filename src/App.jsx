// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Login from './Components/Login';
import NotFound from './pages/NotFound';
import AvailableJobs from './Components/JobDiv/AvailableJobs';
import Jobs from './Components/JobDiv/Jobs';
import ArtisanList from './Components/Workers/ArtisanLists';
import SignUP from './Compos/Registration';
import ArtisanProfessionDetails from './Components/Workers/ArtisansProfessionDetails';
import EmployerDetailForm from './Components/Employers/EmployerDetailForm';
import Footer from './Components/FooterDiv/Footer';
import OrderForm from './Components/OrdersRequest/OderForm';
import ProtectedRoute from './api/ProtectedRoute';
import Cart from './Components/CartContent/Cart';
import ArtisanDashboard from "./Components/Dashboard/ArtisanDashboard";
import Payment from './Components/CartContent/Payment';




import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';




const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-[95%] m-auto bg-white'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/artisans/artisans-by-service/:service_title" element={<ArtisanList />} />
          <Route path="/cart" element={<Cart />} />

          <Route path='/payment' element={<Payment />}/>
          

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/profession-details/:userId/:username" element={<ArtisanProfessionDetails />} />
          <Route path="/employer-details/:userId/:username" element={<EmployerDetailForm />} />
          <Route path="/available-jobs" element={<AvailableJobs />} />
          <Route path="*" element={<NotFound />} />
          <Route path='artisan-dashboard' element={< ArtisanDashboard />} />
          <Route path="/order-service" element={<ProtectedRoute>
         

         {/* <Route path="/register/:userType" element={<RegistrationPage />} />
        <Route path="/success" element={<h1>Registration Successful!</h1>} /> */}

            <OrderForm />
            </ProtectedRoute>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;



