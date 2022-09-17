<<<<<<< HEAD
import React from 'react';
=======
import React , {useContext , useEffect} from 'react';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
// import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem,  FaMoneyBillWave } from 'react-icons/fa';
import { NavLink} from "react-router-dom";
<<<<<<< HEAD


const handleClick=()=>{
  localStorage.clear();
  window.location.reload();
}
=======
import { ContextUser } from '../Context/UserContext';




>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)




const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {

<<<<<<< HEAD

=======
  const value = useContext(ContextUser);

  const handleClick=()=>{

    value.logout();
    localStorage.clear();
    window.location.reload();

    // console.log("aaaaaaaaaa",value.userRole);
    
  }

  // console.log("userRole",value.userRole);
  
  // useEffect(() => {

  //   console.log("aaaaaaaaaa", value.userRole);
  //   console.log("aaaaaaaaaa userStatus", value.userStatus);

  // }, [])
  
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)


  const menu = () => {

<<<<<<< HEAD

=======
    console.log("aaaaaaaaaa", value.userRole);

    const userRole = localStorage.getItem("tokenRole");
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)


    //time sec
      //10000
    //1000

      //time sec
      
      
    //time sec end

      return(

        <>
        
<<<<<<< HEAD
      <MenuItem
      icon={<FaMoneyBillWave />}
      
    >
      <NavLink  to="/adduser">Add User</NavLink>
    </MenuItem>
=======
        {userRole === "superUser" ? 

        (
        
          <MenuItem
          icon={<FaMoneyBillWave />}
          
        >
    
          <NavLink  to="/adduser">Add User</NavLink>
          
        </MenuItem>
    
        )
      :
          (
            null
          )
      }
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

           
 

    </>

    )
   


  }

  // const intl = useIntl();

  return (
    <ProSidebar
    //   image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Balance Sheet
          {/* {intl.formatMessage({ id: 'Balance Sheet' })} */}
        </div>
      </SidebarHeader>

      <SidebarContent>

        <Menu iconShape="circle">
          <MenuItem
           icon={<FaGem />}
            
          ><NavLink  to="/dashboard">
<<<<<<< HEAD
              {/* suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>} */}
            {/* {intl.formatMessage({ id: 'dashboard' })} */}
=======

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
            Dashboard
            </NavLink>
          </MenuItem>

<<<<<<< HEAD
     
          {/* <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem> */}
        </Menu>


=======

         
        </Menu>


        {/* {value.userRole === "superUser" ? 

        (

          <Menu iconShape="circle">
          <MenuItem
         icon={<FaMoneyBillWave />}
            
          ><NavLink  to="/adduser">

            Add User
            </NavLink>
          </MenuItem>


         
        </Menu>

        )
          :
          (
            null
          )
      } */}

    


>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

    
{/*        
        <Menu iconShape="circle">
        <Paper sx={{ position: 'fixed', bottom: 20, background : '#0c1e35 !important' , boxShadow: 'none !important' }} elevation={3}>
         <NavLink  to="/"> <MenuItem
            icon={<FaTachometerAlt />}
            
          >

            Log Out
          </MenuItem>

          </NavLink>

          </Paper>
        </Menu> */}
     
   
  
        {/* <Menu iconShape="circle">
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
            title='User'
            icon={<FaMoneyBillWave />}
          >
           <MenuItem> <NavLink to="/adduser"> Add User</NavLink> </MenuItem>
            {/* <MenuItem>{intl.formatMessage({ id: 'List Income' })} </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'Members' })} </MenuItem> */}
          {/* </SubMenu> */}


          
        {/* </Menu> */} 

        <Menu iconShape="circle">

        {menu()}
        
        </Menu>


      

      </SidebarContent>

          {/* <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'Distribution' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'Pay Donation' })}</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'Distribution List' })}</MenuItem>
            <NavLink to="/member"><MenuItem>{intl.formatMessage({ id: 'Members' })}</MenuItem></NavLink>
          </SubMenu> */}

{/* 
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu> */}
          
       <SidebarFooter style={{ textAlign: 'center' }}>

     
        {/* <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div> */}


        <Menu iconShape="circle">
       
        <MenuItem
            icon={<FaTachometerAlt />}
            onClick={handleClick}
           >

<<<<<<< HEAD
             <NavLink  to="/"  > 
=======
             <NavLink  to='/' > 
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
            Log Out

            </NavLink>

            </MenuItem>

        

           </Menu>
      </SidebarFooter> 
      
    </ProSidebar>
  );
};

export default Aside;