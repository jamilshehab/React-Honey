 import React from "react";
 import {useState} from 'react';
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import Home from './pages/Home'
 import './App.css'
import Header from "./Components/Header";
import Spinner from "./Components/Spinner";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import About from "./pages/About";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'
import ServicesDetails from "./pages/ServicesDetails";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
  library.add(faStar)
function App() {
  AOS.init();
  const [loading,setLoading]=useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000); // 5 seconds

  if(loading){
    return <Spinner/>;
  }
  else{
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services/:id" element={<ServicesDetails/>}/>
      <Route path="/Shop/:id" element={<ProductDetails/>}/>
      <Route path="/Cart" element={<Cart/>}/>
     </Routes>
     </div>
    </BrowserRouter>
   
  );
}
 }
export default App;
