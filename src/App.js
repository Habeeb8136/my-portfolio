import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
     <Navbar />
            
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element ={<Projects />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
