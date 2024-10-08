import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const CheckboxInput = ({ name, control, label, onChange, checked, styles }) => {

  // custom MUI Checkbox to manage form states
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={checked} onChange={onChange} sx={{...styles}}/>}
          label={<span style={{ marginLeft: '15px' }}>{label}</span>}
        />
      )}
    />
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  styles: PropTypes.object,
};

export default CheckboxInput;
