<<<<<<< HEAD
import React from 'react';
=======
import React  from 'react';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
// import TextField from '@material-ui/core/TextField'
import TextField from '@mui/material/TextField'
import { useField } from 'formik';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    margin:"normal",
    size:'small'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
//   inputProps={{
//     style: {
//       height: '40px',
//       padding: '5px 14px',
//     },
// }}

<<<<<<< HEAD
  return (
    <TextField              sx={{
=======

  return (
    
    <TextField        
     sx={{
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
      "& .MuiInputBase-root": {
          height: 45
          
      }
  }}
<<<<<<< HEAD
    {...configTextfield}    />
=======
    {...configTextfield}  
    />
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    
  );
};

export default TextfieldWrapper;