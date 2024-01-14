import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Work from './components/work';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='main-container'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/work' element={<Work/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
