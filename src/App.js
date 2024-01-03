import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/work' element={<Work/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
