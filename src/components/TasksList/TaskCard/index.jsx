import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import CheckboxInput from '../../form/CheckboxInput';
import PropTypes from 'prop-types';

const TaskCard = ({ task, category, control, handleStatusChange }) => {

  // conditional to render styling according to description existing
  const hasDescription = task.description && task.description.trim() !== '';

  const customStyles = {
    padding: hasDescription ? '5px 15px 20px 15px' : '15px',
    border: '1px solid #e0e0e0',
    width: '100%',
    height: '70px',
    boxSizing: 'border-box',
  };

  const checkboxStyles = hasDescription
    ? { position: 'relative', top: '7px' }
    : null;

  return (
    <Grid item xs={12} sm={6} md={4} lg={10} p={1}>
      <Card
        sx={{
          backgroundColor: category?.color || 'white',
          ...customStyles,
          boxShadow: 3,
          transition: '0.3s',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
        >
          <CheckboxInput
            name={`completed-${task?.id}`}
            control={control}
            label={`${category?.name}: ${task.title}`}
            checked={task?.completed}
            onChange={() => handleStatusChange(task?.id, task)}
            styles={checkboxStyles}
          />
        
         <Box ml={4} mb={4} sx={{ position: 'relative', top: '-8px', left: '15px' }}>
            <Typography variant="body2">{task.description || ''}</Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    category_id: PropTypes.number,
  }).isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
  }),
  control: PropTypes.object.isRequired,
  handleStatusChange: PropTypes.func.isRequired,
};

export default TaskCard;
