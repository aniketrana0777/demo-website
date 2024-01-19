import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import Nav from './Compunats/Nav';
import Home from './Compunats/Home';
import Partwo from './Compunats/Partwo';
import Mid from './Compunats/Mid';
import Last from './Compunats/Last';
import Footer from './Compunats/Footer';

const App = () => {
  return (
    <div className="App">
    <Nav></Nav> 
    <Home></Home>
    <Partwo></Partwo>
    <Mid></Mid>
    <Last></Last>
    <Footer></Footer>
    </div>
  );
  }



export default App;
