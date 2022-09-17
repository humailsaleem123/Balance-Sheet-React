import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';

<<<<<<< HEAD

=======
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
function Layout({ setLocale }) {
  const [rtl] = useState(false);
  const [collapsed] = useState(false);
  const [image] = useState(true);
  const [toggled, setToggled] = useState(false);

  // const handleCollapsedChange = (checked) => {
  //   setCollapsed(checked);
  // };

  // const handleRtlChange = (checked) => {
  //   setRtl(checked);
  //   setLocale(checked ? 'ar' : 'en');
  // };
  // const handleImageChange = (checked) => {
  //   setImage(checked);
  // };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (

    <>
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
<<<<<<< HEAD
=======


>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />

      <Main
        // image={image}
        // toggled={toggled}
        // collapsed={collapsed}
        // rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        // handleCollapsedChange={handleCollapsedChange}
        // handleRtlChange={handleRtlChange}
        // handleImageChange={handleImageChange}
      />
<<<<<<< HEAD

=======
  
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    </div>


    </>
  );
}

export default Layout;