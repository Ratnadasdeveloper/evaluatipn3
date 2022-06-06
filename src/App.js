
import { Routes ,Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Home from "./pages/Home"
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
       <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="Product" element={<Product/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
       </Routes>
       </>
    </div>
  );
}

export default App;