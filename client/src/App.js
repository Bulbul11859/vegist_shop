import Banner from "./Components/Banner";
import Menubar from "./Components/Menubar";
import Products from "./Components/Products";

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import SideBar from "./Components/SideBar";
import Fruits from "./Components/catagoryComponent/Fruits";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <BrowserRouter>
        <Menubar/>

       <Routes>
       <Route path="/fruits" element={<Fruits />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/register" element={<Register />}></Route>
       <Route path="/dashboard" element={<SideBar />}></Route>

      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
    
     
      </header>
    </div>
  );
}

export default App;
