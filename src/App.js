import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home0';
import Aboutme from './Components/Aboutme';
import Portcast from './Components/Portcast';
import Program from './Components/Program';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
   <Router>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Routes>
      <Route path='/about' element={<Aboutme></Aboutme>}></Route>
    </Routes>
    <Routes>
      <Route path='/my' element={<Portcast></Portcast>}></Route>
    </Routes>
    <Routes>
      <Route path='/program' element={<Program></Program>}></Route>
    </Routes>

    <Footer></Footer>
   </Router>
     
       
     
      </div>
  );
}

export default App;
