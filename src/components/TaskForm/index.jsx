import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoading } from '../../context/loaderContext';
import AddIcon from '@mui/icons-material/Add';

import TextInput from '../form/TextInput';
import SelectInput from '../form/SelectInput';
import api from '../../services/tasksService';
import NotificationModal from '../NotificationModal';

// define schema shape and validations
const schema = yup.object().shape({
  title: yup.string().required('Título es requerido').max(40, 'Título debe tener máximo 40 caracteres'),
  description: yup.string().max(100, 'Descripción debe tener máximo 100 caracteres'),
  category_id: yup.string().required('Categoría es requerido'),
});

const TaskForm = ({ open, onClose, categories, setOpen, getAllTasks }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  // import loading component
  const { setLoading } = useLoading();

  // define form structure with schema validation
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // function to create a task with modal and form states aswell as petition after submit
  const onSubmit = (data) => {
    api.tasks.create(data)
      .then(() => {
        setLoading(true);
        setModalData({
          type: "success",
          message: "Tarea creada exitosamente!"
        });
        reset();
        setOpen(false);
        getAllTasks();
      })
      .catch(() => {
        setModalData({
          type: "error",
          message: "Error creando la tarea."
        });
        setLoading(true);
      })
      .finally(() => {
        setNotificationOpen(true);
        setLoading(false);
      });
  };

  // function to formar select options as value & label
  const formatOptions = (options) => {
    return options.map((opt) => ({ value: opt.id, label: opt.name }));
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 280,
          borderRadius: '50%',
          backgroundColor: '#1f97f4',
          color: 'white',
          minWidth: 0,
          width: 50,
          height: 50,
          '&:hover': {
            backgroundColor: 'lightblue',
          },
        }}
      >
        <AddIcon />
      </Button>

      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <Box container m={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box pb={3} pt={2}>
              <Typography variant='h6'>
                Nueva Tarea
              </Typography>
            </Box>
            <Box>
              <TextInput
                name="title"
                control={control}
                label="Título"
                errorMessage={errors.title?.message}
              />
            </Box>
            <Box pt={1.5}>
              <TextInput
                name="description"
                control={control}
                label="Descripción"
                errorMessage={errors.description?.message}
              />
            </Box>
            <Box pt={1.5}>
              <SelectInput
                name="category_id"
                control={control}
                label="Categoría"
                options={formatOptions(categories)}
                errorMessage={errors.category_id?.message}
              />
            </Box>

            <Box display="flex" justifyContent="flex-end" pt={2}>
              <Button
                onClick={() => setOpen(false)}
                variant="outlined"
                sx={{ width: '130px' }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="info"
                sx={{ ml: 1, width: '130px' }}
              >
                Crear
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
      
      {/* notification modal */}
      <NotificationModal
        open={notificationOpen}
        modalData={modalData}
        onClose={() => setNotificationOpen(false)} 
      />
    </>
  );
};

TaskForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  setOpen: PropTypes.func.isRequired,
  getAllTasks: PropTypes.func.isRequired,
};

export default TaskForm;