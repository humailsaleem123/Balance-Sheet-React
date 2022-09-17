import React from 'react';
<<<<<<< HEAD
import { Button } from '@material-ui/core';
=======
// import { Button } from '@material-ui/core';
import { Button } from '@mui/material';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
import { useFormikContext } from 'formik';

const SubmitButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    // fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton}
<<<<<<< HEAD
=======
      fullWidth
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    >
      {children}
    </Button>
  );
};

export default SubmitButtonWrapper;