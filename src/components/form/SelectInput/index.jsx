import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

const SelectInput = ({ name, control, label, options, defaultValue = '', errorMessage }) => {

  // custom select inout to manage form states
  return (
    <FormControl fullWidth error={!!errorMessage}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select {...field}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {/* set option.value as form value and label as copy  */}
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {/* error messages display */}
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default SelectInput;
