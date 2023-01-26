import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';

const Hater = () => <h1>I HATE DOGS!</h1>

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/dog">DOG</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/contact">Contact</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/dog" element={<Dog name="RUFF"/>} />
        <Route path="/dog/hater" element={<Hater/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
