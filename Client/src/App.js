import './App.css';
import Nav from './Nav.jsx'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Footer from './Footer'
// import HomeCarousel from './component/Caro';
// import AutoLayoutExample from './component/Box';
import Home from './component/Home.jsx';
import Login from "./component/Login.jsx";
import Profilepage from "./component/Profilepage.jsx"
import Register from "./component/Register.jsx";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import {
  Navigate
} from "react-router-dom";

// import Sidebar from './component/Sidebar';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App"  id="outer-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Rankings" element={<h1>Rankings</h1>} />
          <Route path="Stories" element={<h1>Top Stories</h1>} />
          <Route path="Fixtures" element={<h1>Fixtures</h1>} />
          <Route path="About" element={<h1>About</h1>} />
          <Route path='/login' element={user ? <Navigate to = '/' /> : <Login />} />
          {/* <Route path='/login' element={ <Login />} /> */}
          <Route path='/register' element={user ? <Navigate to = '/login' /> : <Register />} />
          <Route path='/profile' element={<Profilepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
