import './App.css';
import Advice from './Advice';
import AdviceModal from './AdviceModal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Navbar from './Navbar';
import { Routes, Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path= 'about' element={<About />} />
        <Route path= 'contact' element={<Contact />} />
     </Routes>

       <Navbar />
        
        <p>
          <h1>Are you feeling confused ? But need some immediate advice...</h1>
        </p>

       <Advice />
       <AdviceModal />


    </div>
  );
}

<hr />

function About() {
  return (
    <div>
      {/* <h3>You don't need to be alone to carry the burden.
        We can absolutely help you.
      </h3> */}
    </div>
  );
}

<hr />
function Contact() {
  return (
    <div>
      <h3>Contact us anytime</h3>
    </div>
  );
}

export default App;
