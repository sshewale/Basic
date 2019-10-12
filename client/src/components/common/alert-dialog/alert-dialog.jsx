import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';

const AlertDialog = ({ openDialog, alertMessage, onClose }) => {
  return (
    <Dialog open={openDialog} onClose={onClose}>
      <DialogContent>
        <DialogContentText>{alertMessage}</DialogContentText>
      </DialogContent>
      <Button onClick={onClose} color="primary">
        Ok
      </Button>
    </Dialog>
  );
};

export default AlertDialog;
