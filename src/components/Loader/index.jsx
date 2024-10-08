import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {

  // custom loader component styled
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
