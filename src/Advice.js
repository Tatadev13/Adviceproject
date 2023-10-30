import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import AdviceModal from './AdviceModal';



const Advice = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [advice, setAdvice] = useState("");
  
    const openModal = () => {
      setModalIsOpen(true);
      fetchAdvice();
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };
  
    return (
      <div>
        <Button onClick={openModal} variant="contained" color="primary" >
          Get Advice
        </Button>
        <AdviceModal isOpen={modalIsOpen} onClose={closeModal} advice={advice} />

        <p>
        <img
          src='https://sussexgiving.org.uk/wp-content/uploads/2021/06/AdobeStock_110239422.jpeg'
          width='570px'
        /> 

        <img
          src='https://navedz.com/wp-content/uploads/2014/09/advice.jpg'
          width='632px'
        /> 

        </p>

      </div>

        

    );
  };
  

  export default Advice;
  