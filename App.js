
import './App.css';
import { 
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <div style={{
          display : 'flex',
          justifyContent: 'space-evenly',
          background :' #baad351',
          font:'20px'
        }}>
          <Link to ={'/'}
          style={{color:'#000'}}>
            Home
          </Link>
          <Link to ={'/About'}
          style={{color:'#000'}}>
            About
          </Link>
          <Link to ={'/Contact'}
          style={{color:'#000'}}>
            Contact
          </Link>
        </div>
      </div>
      <Routes>
        <Route  path ="/" element ={<Home/>}></Route>
        <Route  path ="/about" element ={<About/>}></Route>
        <Route  path ="/contact" element ={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
