import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Contactpage from './pages/Contact';
import Department from './pages/Department';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import QRScanning from './pages/QRScanning';
import Profile from './pages/Profile';
import OTP from './pages/Otp';
import UserInformation from './pages/UserInformation';
import AuthenticatedLayout from './layout/AuthenticatedLayout';
import UnauthenticatedLayout from './layout/UnauthenticatedLayout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<UnauthenticatedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/department" element={<Department />} />
      </Route>
      <Route element={<AuthenticatedLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/qr-scanning" element={<QRScanning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/user-information" element={<UserInformation />} />
      </Route>
    </Routes>
  );
};

export default App;
