import "./App.css";
import Footer from "./Components/footer/Footer";
import Home from "./Components/Home/Home";
import { NavbarIndex } from "./Components/Navbar/Navbar";
// import RazorpayPaymentAPI from './Components/payment/RazorpayPaymentAPI'
import Login from "./Components/login page/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ImageUploader from "./Components/Upload/ImageUploader";
import { GalleryWithTab } from "./Components/Works/GalleryWithTab";

function App() {
  return (
    <>
      <Router>
        <NavbarIndex /> {/* Navbar should be outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Gallery" element={<GalleryWithTab />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/ImageUploader" element={<ImageUploader />} />

        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
