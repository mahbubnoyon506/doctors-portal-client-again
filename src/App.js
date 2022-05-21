import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import Requiredauth from './Pages/Login/Requiredauth';
import ResetPass from './Pages/Login/ResetPass';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import Myappointment from './Dashboard/Myappointment';
import MyReviews from './Dashboard/MyReviews';
import AllUsers from './Dashboard/AllUsers';
import RequiredAdmin from './Pages/Login/RequiredAdmin';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
        <Requiredauth>
          <Appointment />
        </Requiredauth>
        } />
        <Route path='dashboard' element={
        <Requiredauth>
          <Dashboard />
        </Requiredauth>
        }>
          <Route index element={<Myappointment/>} />
          <Route path='myreviews' element={<MyReviews />} />
          <Route path='users' element={<RequiredAdmin><AllUsers /></RequiredAdmin>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="resetpass" element={<ResetPass />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
