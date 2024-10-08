import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import api from '../../services/tasksService';
import TaskCard from './TaskCard';
import TaskForm from '../TaskForm';
import { useLoading } from '../../context/loaderContext';

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  // import loading component
  const { setLoading } = useLoading();
  // import control to access form states
  const { control } = useForm();

  // function to gel all task passed as props to childs
  const getAllTasks = () => {
    api.tasks.getAll()
      .then(response => setTasks(response.data))
      .catch(error => console.log('Error fetching tasks:', error));
  }

  // function to manage checkbox status change and petition
  const handleStatusChange = (id, task) => {
    const updatedTask = {
      ...task,
      completed: !task.completed,
    };
    
    api.tasks.update(id, updatedTask)
      .then(response => {
        console.log(response);
        getAllTasks();
      })
      .catch(error => console.log('Error updating task status:', error));
  };

  // function to fetch data when component mounts or loading changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await getAllTasks(); // Fetch tasks
        const response = await api.categories.getAll(); // Fetch categories
        setCategories(response.data); // Set categories from response
      } catch (error) {
        console.log('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading]);

  // function to get each task category
  const getCategoryById = (categoryId) => {
    return categories.find(category => category.id === categoryId);
  };

  // create separated arrays for data display
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // function to render task according to the passed array
  const renderTaskList = (taskList) => {
    return taskList.map(task => {
      const category = getCategoryById(task.category_id);
      return (
        <TaskCard
          key={task.id}
          task={task}
          category={category}
          control={control}
          handleStatusChange={handleStatusChange}
        />
      );
    });
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh" 
      width="100%"
      margin="auto"
    >
      <Box sx={{ width: '60%', pt: 4, pl: 3 }}>  
        <Typography variant="h3" align="left" gutterBottom>
          Lista de tareas
        </Typography>
      </Box>

      <Box sx={{ width: '60%', padding: '0 20px' }}>
        <Typography variant="h6" align="left" gutterBottom sx={{ pl: 1 }}>
          Pendientes
        </Typography>
        <Box>
          {pendingTasks.length > 0 ? renderTaskList(pendingTasks) : <Typography>No hay tareas pendientes.</Typography>}
        </Box>
      </Box>

      <Box sx={{ width: '60%', padding: '0 20px', pt: 2 }}>
        <Typography variant="h6" align="left" gutterBottom sx={{ pl: 1 }}>
          Terminadas
        </Typography>
        <Box>
          {completedTasks.length > 0 ? renderTaskList(completedTasks) : <Typography>No hay tareas terminadas.</Typography>}
        </Box>
      </Box>

      <TaskForm open={open} setOpen={setOpen} onClose={handleFormClose} categories={categories} getAllTasks={getAllTasks} />
    </Box>
  );
};

export default TasksList;
