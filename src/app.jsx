import axios from "axios";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/result";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const response = axios.create;
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/weather/:cityName" element={<Result />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}
export default App;
