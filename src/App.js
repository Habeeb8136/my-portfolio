import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element ={<Projects />}/>
      
    </Routes>
    
  );
}

export default App;
