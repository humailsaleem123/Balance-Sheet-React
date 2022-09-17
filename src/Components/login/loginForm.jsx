<<<<<<< HEAD
import React , { useRef  } from 'react'
=======
import React , { useRef , useContext , useEffect } from 'react'
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
import Paper from '@mui/material/Paper';
import '../../../node_modules/mdb-ui-kit/css/mdb.min.css';
import TextfieldWrapperrr from "../addUser/TextField";
import { Formik ,  Form } from "formik";
import * as Yup from 'yup';
import SubmitButtonWrapperrr from '../addUser/SubmitBtn';
import {  useNavigate   } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
<<<<<<< HEAD
=======
import './loginForm.css';
import { ContextUser } from '../Context/UserContext';
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

function LoginForm() {

  
<<<<<<< HEAD
  const username=useRef()
  const password=useRef()

  let Navigate = useNavigate();

=======
  // const username=useRef()
  // const password=useRef()

  let Navigate = useNavigate();

  const value = useContext(ContextUser);

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  // const handleSubmit=()=>{

  //     if(username.current.value=="admin"&&password.current.value=="admin"){
  //         localStorage.setItem("userData","admin")
  //         localStorage.setItem("passwordData","admin")
  //     }
  // }

 
  const initialFormState = {
<<<<<<< HEAD
    username: "",
=======
    email: "",
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    password:"",


  };

    
  const formValidation = Yup.object().shape({
      
<<<<<<< HEAD
    username: Yup.string()
    .max(15, '*Must be 15 characters or less')
    .required('*Required'),
=======
    // username: Yup.string()
    // .max(15, '*Must be 15 characters or less')
    // .required('*Required'),

    email: Yup.string().email('Invalid email address').required('*Required'),
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

    // phone: Yup.string().required('*Required')
    // .matches(phoneRegExp, '*Phone number is not valid'),

  password: Yup.string()
  // .min(8 , '*Minimum 8 characters')
  .max(30, '*Must be 30 characters or less')
  .required('*Required'),

  })

<<<<<<< HEAD
//   useEffect(() => {

//     if( getUser ){

//       Navigate('/dashboard');
//     }

// })
=======
  console.log("userStatus",value.userStatus);

  console.log("userRole",value.userRole);

  useEffect(() => {

    if(value.loginStatus === true){

      localStorage.setItem("token" , value.userStatus)
      localStorage.setItem("tokenRole" , value.userRole)

      setTimeout(()=>{
        Navigate('/dashboard');
      }, 2000)
 
    }


})


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


  // const ForgetPass = () => {
  //   const LoginEmailID = value.loginEmail.current.value;
  //   if(!value.loginEmail){
  //     alert("email is sent");
  //   }
  //   console.log("loginEmail",LoginEmailID);

  // }

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

  return (

    <>
  <React.Fragment>

<<<<<<< HEAD
      <section className='login-root'>
=======
      <section className='login-root flex-wrapper '>
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
      <h2 className='mt-5 text-center'>LOGIN</h2>
      <div className="container-fluid h-custom" >
        
        <div className="row d-flex justify-content-center align-items-center h-100">
          
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="login" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

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
  
  onSubmit={values => {
    console.log(values);
<<<<<<< HEAD
    console.log("value",values.username);

    if( values.username==="admin" && values.password==="admin" ){
      localStorage.setItem("userData","admin")
      localStorage.setItem("passwordData","admin")
  }

  
  const getUser=localStorage.getItem("userData")
  const getPassword=localStorage.getItem("passwordData")

        if( getUser && getPassword ){

          Navigate('/dashboard');
        }
=======
    // console.log("value",values.username);

    value.login();
    handleClick();





  //   if( values.username==="admin" && values.password==="admin" ){
  //     localStorage.setItem("userData","admin")
  //     localStorage.setItem("passwordData","admin")
  // }

  
  // const getUser=localStorage.getItem("userData")
  // const getPassword=localStorage.getItem("passwordData")

  //       if( getUser && getPassword ){

  //         Navigate('/dashboard');
  //       }
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

<<<<<<< HEAD
<Form >
  

<Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 5 , md:20  , lg:10 }}   fluid="md" alignContent="center" justifyContent="center"  sx={{ flexDirection: { xs: "column", md: "column"}  } }  
  
  >
   
          <div className="form-outline mb-4">
              <TextfieldWrapperrr 
                      name="username"
                      label="username"
                      placeholder="Your username"
                      ref={username}
=======
<Form>
  

<Grid container rowSpacing={1} columnSpacing={{ xs: 7, sm: 10 , md:20  , lg:15 }}   fluid="md"  justifyContent="center"
  //  sx={{flexDirection: { md: "column"} }}
   alignContent='center'
  >
    <Grid item xs={8}  md={9} lg={12}>

          <div className="form-outline mb-4">
              <TextfieldWrapperrr 
              
                      name="email"
                      label="Email"
                      placeholder="Your Email Address"
                      inputRef={value.loginEmail}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
              />

            {/* <input type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid UserName" ref={username} /> */}
              
            {/* <label className="form-label">userName</label> */}
          </div>
<<<<<<< HEAD


=======
          </Grid>


          <Grid item xs={8} md={9} lg={12}>
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
          <div className="form-outline mb-3">
          <TextfieldWrapperrr
                      name="password"
                      label="password"
<<<<<<< HEAD
                      placeholder="password"
                      ref={password}
              />
          </div>


{/* 
           <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingRight: "2.5rem" , paddingLeft: "2.5rem"}}>Login</button> 
          </div> */}
          
          <div> 
            <SubmitButtonWrapperrr
              // onClick={postData}
            
              >
            submit
          </SubmitButtonWrapperrr>

        </div>  
         
        </Grid>
=======
                      placeholder="Your Password"
                      type='password'
                      inputRef={value.loginPassword}
              />
          </div>
          </Grid>

          {/* <div class="row mb-1">
          <div class="col-md-6 d-flex justify-content-center">
          <div class="form-check mb-0 mb-md-0">
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
  
          <a href="#!">Forgot password?</a>
        </div>
      </div> */}

<Grid item xs={8} md={9} lg={12}>
              <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
            <div className='mb-3' >
              
              <a  style={{cursor:"pointer" , color:"#1976d2"}} onClick={()=> value.ResetEmail()}>Forgot password?</a> 
            
            </div>
          </Box>
        </Grid>
 
        <Grid item xs={8} md={9} lg={12}>
      <div className="pt-1 mb-4"> 
            <SubmitButtonWrapperrr
              // onClick={postData}

              >
            Login
          </SubmitButtonWrapperrr>

        </div>  
     

        </Grid>


        

        </Grid>
        
    

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
        </Form>

        </Formik>

        </Box>

      </div>
    </div>
    </div>
<<<<<<< HEAD
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
=======
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
    MONGO TECH Copyright © 2022. All rights reserved. 
    </div>

    <div>
      <a href="!#" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="!#" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="!#" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="!#" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>

    </div>
<<<<<<< HEAD
    </Paper>
    </section>
=======
    </section>

    <Snackbar open={open} autoHideDuration={3000}
        					onClose={handleClose}
                  // sx={{marginBottom:14}}
							anchorOrigin={{
							   vertical: "bottom",
							   horizontal: "left"
							}}
							>

									<AlertComponent onClose={handleClose}
										>
										{value.status}
									</AlertComponent>

								
						</Snackbar>

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    </React.Fragment>
  </>


  )
}

export default LoginForm;