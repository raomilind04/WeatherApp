import axios from "axios";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";

function App() {
  const response = axios.create;
  return (
    
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Body />
        <Footer />
      </div>
 
  );
}
export default App;
