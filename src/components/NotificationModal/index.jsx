import React, { useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const NotificationModal = ({ open, modalData, onClose }) => {

  // custom notification modal recieved modalData as an array with message & type
  const [openSnackbar, setOpenSnackbar] = useState(open);

  useEffect(() => {
    setOpenSnackbar(open);
  }, [open]);

  const handleClose = () => {
    setOpenSnackbar(false);
    onClose();
  };

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={modalData.type} sx={{ width: '100%' }}>
        {/* displays type as severity and message as copy */}
        {modalData.message}
      </Alert>
    </Snackbar>
  );
};

NotificationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  modalData: PropTypes.shape([{
    type: PropTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired,
    message: PropTypes.string.isRequired,
  }]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationModal;
