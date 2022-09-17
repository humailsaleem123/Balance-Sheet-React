<<<<<<< HEAD
import React from 'react'
import { Formik  , Form } from "formik";
import { Typography } from "@material-ui/core";
=======
import React , { useContext, useState } from 'react'
import { Formik  , Form } from "formik";
import Typography from '@mui/material/Typography';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
// import { makeStyles } from "@material-ui/core/styles";
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextfieldWrapper from "./TextField";
import SubmitButtonWrapper from "./SubmitBtn";
import SelectWrapper from "./Select";
import Role from './Role.json';
<<<<<<< HEAD


// const useStyles = makeStyles({
//     errorStyle: {
//       color: "red",
//       fontSize: "12px",
//       variant:"outlined"
//     },
//     buttonStyle: {
//       width: "15%",
//       fontSize: "15px"
//     }
//   });
  // const styles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     fontWeight: state.isSelected ? "bold" : "normal",
  //     color: "white",
  //     backgroundColor: state.data.color,
  //     fontSize: state.selectProps.myFontSize
  //   }),
  //   singleValue: (provided, state) => ({
  //     ...provided,
  //     color: state.data.color,
  //     fontSize: state.selectProps.myFontSize
  //   })
  // };
=======
import { ContextUser } from '../Context/UserContext';
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  
  
   function AddUser() {
  
    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
    // const classes = useStyles();
<<<<<<< HEAD
  
=======
    
      const value = useContext(ContextUser);

    // console.log("alert color",value.alert);
    // console.log("alert status",value.status);

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    const initialFormState = {
      name: "",
      email: "",
      password:"",
      role:""

    };
  
    const formValidation = Yup.object().shape({
      
      name: Yup.string()
      .max(15, '*Must be 15 characters or less')
      .required('*Required'),
  
      // phone: Yup.string().required('*Required')
      // .matches(phoneRegExp, '*Phone number is not valid'),
  
    email: Yup.string().email('Invalid email address').required('*Required'),
  
    role: Yup.string()
    .ensure()
    .required("Role is required!!!!"),
  
    password: Yup.string()
    .min(8 , '*Minimum 8 characters')
    .max(30, '*Must be 30 characters or less')
    .required('*Required'),
  
    })
<<<<<<< HEAD
=======


    const [open, setOpen] = React.useState(false);

    
const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};


const AlertComponent = React.forwardRef((props, ref) =>
<Alert elevation={6} severity={(value.alert==='error')? 'error' : 'success'} variant="filled" {...props} ref={ref} /> 

);
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  
  
    return (
      
  <React.Fragment>
  
  <Box 
  display="flex"
  alignItems="center"
    justifyContent="center"
        sx={{
          
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        >
  
    <Typography variant="h4" component="h2" >
        Add User
      </Typography>
  
      </Box>
    <Container  maxWidth="md" style={{'backgroundColor':'#efeff6'}} sx={{mt:10, boxShadow: 3 }} >
  
  
    <Box 
    componenet="form"
    alignItems="center"
    justifyContent="center"
        sx={{
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        m={5} pt={3}  
      >
  
  <Formik 
  initialValues={{...initialFormState}}
  validationSchema={formValidation}
<<<<<<< HEAD
  
  onSubmit={values => {
    console.log(values);
=======
  validateOnMount
enableReinitialize={true}

  onSubmit={(values , {resetForm}) => {
    console.log(values);
    value.register();
    handleClick();
    resetForm({values:''});


    // const userInfo = ([
    //   values.name ,
    //    values.email,
    //    values.password,
    //    values.role
    // ]);

    // console.log("userInfo",userInfo);

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    // console.log("dadada" ,values.name)
  
//     Axios.post("https://localhost:44340/AddFund/Add",
//   {
//     name : values.name,
//     email : values.email,
//     phone : values.phone,
//     payment : values.payment,
//     donation : values.donation,
//     amount : values.amount,
//   }
//   )
//   .then((response) => {
//     console.log(response);
//     console.log("Name :" , values.name);
//   })
  
  
  }}
  
  
  
  >
  
  <Form >
  {/* onSubmit={formik.handleSubmit} */}
  <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 5 , md:20  , lg:20  }} alignContent="center" justifyContent="center"  sx={{ flexDirection: { xs: "column", md: "row"}  } }  
  
  >
<<<<<<< HEAD
      
  
  
    <Grid item xs={10}  md={7} lg={7} >
    <InputLabel id="demo-simple-select-standard-label">Full Name</InputLabel>   
=======

  
    <Grid item xs={10}  md={7} lg={7} >
    <InputLabel id="demo-simple-select-standard-label">Full Name</InputLabel>
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    <div>
  
        <TextfieldWrapper  
          name="name"
          label="Name"
          placeholder="Your Name"
<<<<<<< HEAD
=======
          inputRef={value.Name}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
        />
  
    
   
      </div>
  
    </Grid>
  

  
  
    <Grid item xs={10} md={7} lg={7} >
   
  
    <div>
  
    <InputLabel id="demo-simple-select-standard-label">Email</InputLabel> 
    <TextfieldWrapper 
          label="email"
          name="email"
          placeholder="Your Email"
<<<<<<< HEAD
=======
          inputRef={value.Email}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
        />
        
      
    
      </div>
    </Grid>
  

  
  
    <Grid item xs={10}  md={7} lg={7}>
  
    <div>
      
    <InputLabel id="demo-simple-select-standard-label">Password</InputLabel>
    <TextfieldWrapper  
          label="Password"
          name="password"
          type='password'
          placeholder="Enter Strong Password"
<<<<<<< HEAD
=======
          inputRef={value.Password}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
        />
  
   
      </div>
  
    </Grid>



    <Grid item xs={10} md={7} lg={7}>
     
  
    <div >
  
      <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
  
    
            <SelectWrapper 
  
              name="role"
              label="Role"
              options={Role}
<<<<<<< HEAD
=======
              inputRef={value.Role}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  
  
  
            />
          
      
     
  
  
      </div>
    </Grid>

    <Grid item xs={10} md={7} lg={7}>


    <div >
        <SubmitButtonWrapper
            // onClick={postData}
<<<<<<< HEAD
           
        >
=======
        > 
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
          submit
        </SubmitButtonWrapper>
      </div>

  </Grid>


  </Grid>




     
    </Form>
    </Formik>
<<<<<<< HEAD
  
    </Box>
=======


  
    </Box>

    <Snackbar open={open} autoHideDuration={3000}
        					onClose={handleClose}
                  // sx={{marginLeft:33}}
							anchorOrigin={{
							   vertical: "bottom",
							   horizontal: "right"
							}}
							>

									<AlertComponent onClose={handleClose}
										>
										{value.status}
									</AlertComponent>

								
						</Snackbar>


>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
        </Container>
      </React.Fragment>
      
    );
  }

export default AddUser;