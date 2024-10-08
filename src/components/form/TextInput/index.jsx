import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const TextInput = ({ name, control, label, defaultValue = '', rules, errorMessage }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          error={!!errorMessage}
          helperText={errorMessage || ''}
        />
      )}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  rules: PropTypes.object,
  errorMessage: PropTypes.string,
};

export default TextInput;