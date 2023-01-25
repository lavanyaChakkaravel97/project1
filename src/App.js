
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import FarmerMotion from './components/FarmerMotion';
import Footer from './components/Footer';
import SideNavBar from './components/SideNavBar';
import ImageSlider from './components/ImageSlider';
import ImageCircle from './components/ImageCircle';

function App() {
  return (
    <>
    <Router>
      <Navbar />
     
         <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/services"  element={<Services />}></Route>
          <Route path="/products"  element={<Products />}></Route>
          <Route path="/sign-up"  element={<FarmerMotion />}></Route>
          <Route path="/imageslider"  element={<ImageSlider />}></Route>
          <Route path="/imagecircle"  element={<ImageCircle />}></Route>
          {/* <Route path="/sign-up"  element={<SignUp />}></Route> */}
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;
