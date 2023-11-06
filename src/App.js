import './App.css';
import Advice from './Advice';
import AdviceModal from './AdviceModal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Navbar from './Navbar';



function App() {
  return (
    <div className='App'>
       <Navbar />
        
        <p>
          <h1>Are you feeling confused ? But need some immediate advice...</h1>
        </p>

       <Advice />
       <AdviceModal />


    </div>
  );
}

export default App;
