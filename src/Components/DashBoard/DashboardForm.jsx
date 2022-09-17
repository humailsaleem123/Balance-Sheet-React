import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DashboardTable from "./DashboardTable";

// const Button = styled(MuiButton)(spacing);
// const UploadIcon = styled(MuiCloudUpload)(spacing);
// const DeleteIcon = styled(MuiDelete)(spacing);

    const CenteredContent = styled.div`
    text-align: center;
  `;

  const theme = createTheme()
  // const BigAvatar = withStyles(Avatar)
  // `
  //   width: 120px;
  //   height: 120px;
  //   margin: 0 auto ${(props) => props.theme.spacing(2)}px;
  //   ${({ $withBorder }) =>
  //     $withBorder &&
  //     `border: 1px solid ${grey[500]};
  //      box-shadow: 0 0 1px 0 ${grey[500]} inset, 0 0 1px 0 ${grey[500]};`}`;

  function DashboardForm({ myRef , age , setShow }) {



  return (

<React.Fragment>
{/* <Box 
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


    </Box> */}
{/* 
<Container  maxWidth="lg" style={{'backgroundColor':'#efeff6'}} sx={{mt:10, boxShadow: 3 }} > */}
{/* <Box 
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
    > */}

 <CenteredContent>



        {/* <IconButton>
            <Avatar 
                src={image || "/images/example.jpg"}
                style={{
                margin: "10px",
                width: "60px",
                height: "60px",
                objectFit: "cover",
                border:'1px solid grey',
                boxShadow: '0 0 1px 0 grey inset, 0 0 1px 0 grey'
                }}
                
                // imgProps={{
                //     style: {
                //       maxHeight: "100%",
                //       maxWidth: "100%",
                //       objectFit: "cover",
                //     },
                //   }}
               
                />
        </IconButton> */}
      {/* <Avatar
        $withBorder
        alt="Avatar"
        src={image || "/static/img/avatars/default-profile.svg"}
        imgProps={{
          style: {
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          },
        }}
      /> */}
      {/* <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="avatar-image-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
        //   mb={0}
          onClick={handleClick}
        >
          {image ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
          {image ? "Delete" : "Upload"}
        </Button>
      </label> */}


      <ThemeProvider theme={theme}>
    {/* <CssBaseline /> */}
    {/* <Container component="main" maxWidth="lg" sx={{ mb: 4 }}> */}

       {/* <DashboardTextForm/> */}

       <DashboardTable myRef={myRef} age={age}  setShow={setShow} />

    {/* </Container> */}
  </ThemeProvider>
  
    </CenteredContent>

{/* 
</Box> */}

{/* </Container> */}


</React.Fragment>

  )

}
export default DashboardForm;
