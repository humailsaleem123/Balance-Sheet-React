import React from 'react';
<<<<<<< HEAD
// import { useIntl } from 'react-intl';
import {  FaBars } from 'react-icons/fa';
import Dashboard from '../DashBoard/Dashboard';
// import TextForm from '../Income Form/TextForm';
import { Route, Routes} from "react-router-dom";
import AddUser from '../addUser/AddUser';

=======
import {  FaBars } from 'react-icons/fa';
import Dashboard from '../DashBoard/Dashboard';
import { Route, Routes , Navigate} from "react-router-dom";
import AddUser from '../addUser/AddUser';
import { UserContext } from '../Context/UserContext';
import AuthRole from '../AuthRole';
import Error from '../Error/Error';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)




const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  // const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />


      </div>




 
    <Routes>



<<<<<<< HEAD
    <Route exact path="/dashboard" element={ <> <Dashboard/>  </> }  />



    <Route exact path="/adduser" element={ <AddUser/> }  />

=======
    <Route exact path="/dashboard" element={ <> <Dashboard/> </> }  />


    <Route element={<> <AuthRole/> </>}>

        <Route exact path="/adduser" element={ <> <AddUser/>  </>}  />

    </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    
    {/* <Route path="*"  element={<> <Error/> </>}/> */}
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)



      </Routes> 
<<<<<<< HEAD
      {/* <Route path="/addfund" element={ <> <TextForm/>   </> } /> */}

    
        {/* <Route path="/member" element = {<>   <StepsProvider><Members/> </StepsProvider> </>} /> */}
=======
    
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)



 

              {/* src={reactLogo} */}
      {/* <header>
        <h1>

          <img width={80}  alt="react logo" /> {intl.formatMessage({ id: 'title' })}
        </h1>
        <p>{intl.formatMessage({ id: 'description' })}</p>
        <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
        </div>
      </header> */}
      {/* <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'collapsed' })}</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleRtlChange}
          checked={rtl}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'rtl' })}</span>
      </div>
      <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div> */}

      {/* <footer>
        <small>
          © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
            Mohamed Azouaoui
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/azouaoui-med" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/azouaoui_med" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
            />
          </a>
        </div>
      </footer> */}


    </main>
  );
};

export default Main;