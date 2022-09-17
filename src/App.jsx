import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Components/SideBar/Layout';
<<<<<<< HEAD
// import messages from './messages';
import './Components/SideBar/sidebar.scss';
import { Route, Routes} from "react-router-dom";
import LoginForm from './Components/login/loginForm';
// messages={messages[locale]}
=======
import './Components/SideBar/sidebar.scss';
import { Route, Routes} from "react-router-dom";
import LoginForm from './Components/login/loginForm';
import {UserContext} from './Components/Context/UserContext';
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import Auth from './Components/Auth';

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

function App() {


  const [locale, setLocale] = useState('en');

<<<<<<< HEAD
=======
  
const options = {
  position: positions.MIDDLE
};

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  return (

    <>

    {/* <IntlProvider locale={locale} >
        <Layout setLocale={setLocale} />

    </IntlProvider> */}
    

<Routes>

{/* <Route exact path='/' element={ <>   <IntlProvider locale={locale} >  <Layout setLocale={setLocale} />   </IntlProvider>  </>  } /> */}


<<<<<<< HEAD
<Route exact path='*'  element={ <>  <IntlProvider locale={locale} >  <Layout setLocale={setLocale} />   </IntlProvider>  </>  }  />




<Route exact path='/' element={ <LoginForm/> }/>


=======
<Route element={<> <Auth/> </>}>    
        
<Route exact path='*'  element={ <> 

  <Provider template={AlertMUITemplate} {...options}> 

  <UserContext>

   <IntlProvider locale={locale} >  <Layout setLocale={setLocale} />   </IntlProvider> 

   </UserContext>

  </Provider>

    </>  }  />

 
    </Route>  


<Route exact path='/' element={
   <Provider template={AlertMUITemplate} {...options}> 
       <UserContext><LoginForm/></UserContext>  
   </Provider>  }/>
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)



</Routes>



    </>

  );
}

export default App;