<<<<<<< HEAD
import React , { useRef , useState } from 'react'
=======
import React , { useRef , useState , useContext } from 'react'
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
import InputLabel from '@mui/material/InputLabel';
import { Formik , Form } from "formik";
import Grid from '@mui/material/Grid';
import * as Yup from 'yup'; 
<<<<<<< HEAD
import {  Button, Typography } from "@material-ui/core";
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
=======
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
// import { makeStyles } from "@material-ui/core/styles";
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
import DashboardForm from './DashboardForm';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import Selectt from '@mui/material/Select';
<<<<<<< HEAD
import MenuItem from '@material-ui/core/MenuItem';

=======
// import MenuItem from '@material-ui/core/MenuItem';
import { MenuItem } from '@mui/material';
import { ContextUser } from '../Context/UserContext';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

function Dashboard() {

  // let isDisplay = false
<<<<<<< HEAD

  const [age, setAge] = useState('');
  
const useStyles = makeStyles({
  errorStyle: {
    color: "red",
    fontSize: "12px",
    variant:"outlined"
  },
  buttonStyle: {
    width: "15%",
    fontSize: "15px"
  },
  root: {
    "& .MuiInputBase-input": {

      padding: "10px !important",
    },
  },
  select: {
    "& ul": {
       
    },
    // "& li": {
    //     fontSize: 12,
    // },
},

});

const classes = useStyles();
=======
  const value = useContext(ContextUser);

  console.log("userrRolee",value.userRole);
  
  const [age, setAge] = useState('');
  
// const useStyles = makeStyles({
//   errorStyle: {
//     color: "red",
//     fontSize: "12px",
//     variant:"outlined"
//   },
//   buttonStyle: {
//     width: "15%",
//     fontSize: "15px"
//   },
//   root: {
//     "& .MuiInputBase-input": {

//       padding: "10px !important",
//     },
//   },
//   select: {
//     "& ul": {
       
//     },
//     // "& li": {
//     //     fontSize: 12,
//     // },
// },

// });

// const classes = useStyles();
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

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


  const initialFormState = {

    Sheet:"",
    sheetNo:"",

  };


  const formValidation = Yup.object().shape({
      


    Sheet: Yup.string()
  .ensure()
  .required("*Sheet No. is required!!!!"),

  
  sheetNo: Yup.string()
  .ensure()
  .required("*Sheet No. is required!!!!"),


  })


  const myRef = useRef(null);

  const clickElement = (ref) => {

    if(age.length===0){
      ref.current.dispatchEvent(
        new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        }),
      );
    }
    else{
      return false;
    }

    // ref.current.dispatchEvent(
    //   new MouseEvent('click', {
    //     view: window,
    //     bubbles: true,
    //     cancelable: true,
    //     buttons: 1,
    //   }),
    // );
  };


  // const select = (evt) => {
  //   if (evt.target.value) {
  //     console.log("Selected", evt.target.value);
  //   } else {
  //     console.log("not selected");
  //   }
  // };

const [show , setShow] = useState(false);





const handleChange = (event) => {
  setAge(event.target.value);
};



const onClear = () => {
  setAge("");
};


// const showTextField = (inputRef) => {

  // { show ? true : null }
//   inputRef.isDisplay = true;

// }


<<<<<<< HEAD
=======
const userr = localStorage.getItem("token");

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

  return (
      
    <React.Fragment>
    
    <Box 
    display="flex"
    alignItems="left"
      justifyContent="left"
          sx={{
            
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          >
    
      <Typography variant="h4" component="h2" >
<<<<<<< HEAD
          Welcome User
=======
          Welcome {userr}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
        </Typography>
    
        </Box>


      {/* <Container  maxWidth="sm"  > */}
    
    
      {/* <Box 
      componenet="form"
      alignItems="center"
      justifyContent="center"
          sx={{
            justifyContent: 'space-between',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          m={5} pt={0}  

        > */}
    
    <Formik 
    initialValues={{...initialFormState}}
    validationSchema={formValidation}
    
    onSubmit={values => {
      console.log(values);
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

    
    {/* <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 5 , md:20  , lg:20  }} alignContent="right" justifyContent="right"  sx={{ flexDirection: {  md: "row"}  } }  > */}
    
        

    
  
    <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          marginBottom:5,
        }}
      >

      
    
  
    
  
  
<Container  maxWidth="sm"  sx={{marginTop:5}}> 

<Grid container columnSpacing={{ xs: 1, sm: 5 , md:20  , lg:20  }} alignContent="left" justifyContent="left"   sx={{ flexDirection: { xs: "column", md: "row"}  } }  > 
  
      <Grid item xs={10} md={7} lg={7}>
       
    
      <div >
    
        <InputLabel id="demo-simple-select-standard-label">Sheet Number :</InputLabel>

        {/* <TextField className={classes.root}
                ref={selectInputRef}
                variant='outlined'
                margin='normal'
                size='small'
                  fullWidth
                  select
                  SelectProps={{
                    native: true
                  }}
                  label="Sheet No."
                  name="SheetNo"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" ></option>
                  <option value="Data">Data</option>
                </TextField> */}

<<<<<<< HEAD
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
=======
        <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
              <InputLabel id="demo-select-small">Sheet</InputLabel>
              <Selectt
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Sheet"
                onChange={handleChange}
<<<<<<< HEAD
                MenuProps={{ classes: { paper: classes.select } }}
=======
                // MenuProps={{ classes: { paper: classes.select } }}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                // margin="normal"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Data">Data</MenuItem>
              </Selectt>
            </FormControl>
                            
        
       {/* {console.log("selected-Item" , Role)} */}
    
    
        </div>

        


      </Grid>

   
      <Grid item xs={10} md={7} lg={9} ml={1} mt={4}>
      <Box sx={{ display: 'flex' , justifyContent: 'space-between' , flexWrap:"wrap" }}>
    

    
      <div>

          {/* <SubmitButtonWrapper
              // onClick={postData}
             
          >
            Add Sheet


          </SubmitButtonWrapper> */}


<<<<<<< HEAD
     <Button className={classes.root} variant='contained' color='primary'  onClick={()=>{clickElement(myRef) ; onClear() ; setShow(true)} }>ADD Sheet</Button>
=======
     <Button variant='contained' color='primary'  onClick={()=>{clickElement(myRef) ; onClear() ; setShow(true)} }>ADD Sheet</Button>
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)



        </div>

        <br/>
        <br/>
        <br/>

        <div>

<<<<<<< HEAD
        <TextField size='small' type='text' hidden={ (show && age.length===0) ? null : true} name='sheetNo.' label="SheetNo."
         
         placeholder='Enter Your SheetNo.' className={classes.root}
=======
        <TextField size='small' type='text' hidden={ (show && age.length===0) ? null : true} name='sheetNo.' label="New Sheet Name"
         
         placeholder='Enter Sheet Name'
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
         /> 
       

        </div>
   
 
     </Box>
      </Grid>


      {/* <Grid item xs={10} md={7} lg={6} ml={1} mt={4}>


        
            <div>


         <TextField size='small' type='text' hidden={show ? null : true} name='sheetNo.' label="SheetNo."
         
         placeholder='Enter Your SheetNo.'
         /> 


          </div>



      </Grid> */}
    
</Grid>
      
      </Container>

  
{/*   
    </Grid> */}
  
  
  
  
  </Box>

  <DashboardForm myRef={myRef} age={age} setShow={setShow}/>

      </Form>

      </Formik>
    
      {/* </Box> */}


          {/* </Container> */}
        </React.Fragment>
        
      );
}

export default Dashboard;