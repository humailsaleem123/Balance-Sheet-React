  import React from 'react';
<<<<<<< HEAD
  import {MenuItem} from '@material-ui/core';
  import { useField, useFormikContext } from 'formik';
// import TextField from '@material-ui/core/TextField'
import TextField from '@mui/material/TextField'
=======
  // import {MenuItem} from '@material-ui/core';
  import { MenuItem } from '@mui/material';
  import { useField, useFormikContext } from 'formik';
// import TextField from '@material-ui/core/TextField'
import TextField from '@mui/material/TextField'

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  const SelectWrapper = ({
    name,
    options,
    ...otherProps
  }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = evt => {
      const { value } = evt.target;
      setFieldValue(name, value);

      console.log("selecteddd" , value);
    };



    const configSelect = {

      ...field,
      ...otherProps,
      select: true,
      variant: 'outlined',
      fullWidth: true,
      onChange:handleChange,
      margin:"normal"

    };

    if (meta && meta.touched && meta.error) {
      configSelect.error = true;
      configSelect.helperText = meta.error;
    }
    

    return (
      
  <TextField      sx={{
    "& .MuiInputBase-root": {
        height: 45
        
    }
}}  {...configSelect} 

size='small'     >
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
            {options[item]}
            </MenuItem>
          )
        })}
      </TextField>

    );

  };

  export default SelectWrapper;