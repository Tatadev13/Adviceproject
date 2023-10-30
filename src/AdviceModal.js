import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";



const AdviceModal = ({ isOpen, onClose, advice }) => {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#29ffc6",
            borderRadius: "20px",
            padding: "16px",
            boxShadow: 24,
            p: 3,
          }}
        >
          <h2>Exclusively for you...</h2>
          <p>{advice}</p>
          <Button onClick={onClose} variant="contained" >
            Close
          </Button>
        </Box>
      </Modal>
    );
  };
  

  export default AdviceModal;