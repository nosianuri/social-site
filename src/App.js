import './App.css';
import About from './pages/about/About';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contacts';
import Privacy from './pages/privacy/Privacy';
import Home from './pages/home/Home';
import NotFound from './pages/Shared/NotFound';
import Service from './pages/Service/Service';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className=''>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}


export default App;
