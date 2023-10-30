import './App.css';
import Advice from './Advice';
import AdviceModal from './AdviceModal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



function App() {
  return (
    <div className='App'>
        
        <p>
          <h1>Are you feeling confused ? But need some immediate advice...</h1>
        </p>

       <Advice />
       <AdviceModal />


    </div>
  );
}

export default App;
