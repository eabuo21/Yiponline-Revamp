import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "../src/Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "../src/Pages/Contact/Contact";
import { RingLoader } from "react-spinners";
import Head from "../src/Components/Nav/Nav";
import Footer from "./Components/Feat/Footer";

function App() {
  return (
    <>
      <div className="App">
        <section className="nav-container fixed z-50 w-full ">
          {/*the navigation bar component goes here*/}
          <Head/>
       </section>

        <section className="loader-container">
           {/* function that simulates the loader goes in here, you cn twealk the coe to fit your requirement */}
        </section>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

       
        {/* here we call the toast container fr our notifications */}
        <ToastContainer/>

    
      </div>
    </>
  );
};
export default App;
