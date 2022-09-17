<<<<<<< HEAD
import React, { useState , useEffect , useCallback} from "react";
import { forwardRef } from 'react';
import MaterialTable  from "material-table";
import { Input } from "@material-ui/core";
=======
import React, { useState , useEffect , useCallback , useRef} from "react";
import { forwardRef } from 'react';
import MaterialTable  from "material-table";
import { Input } from "@mui/material";
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
<<<<<<< HEAD
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from "@material-ui/core";
import SaveAlt from '@material-ui/icons/SaveAlt';
import Clear from '@material-ui/icons/Clear';
import Data from '../../Data.json';
=======
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Clear from '@material-ui/icons/Clear';
import Data from '../../Data.json';
import Check from '@material-ui/icons/Check';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import FilterList from '@material-ui/icons/FilterList';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Remove from '@material-ui/icons/Remove';
import ViewColumn from '@material-ui/icons/ViewColumn';
import './Dashboard.css';
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)


function DashboardTable({ myRef , age , setShow }) {

  // const [age, setAge] = React.useState('');



  // const [data, setData] = useState(Data);



  // const myRef = useRef(null);

  // const clickElement = (ref) => {
  //   ref.current.dispatchEvent(
  //     new MouseEvent('click', {
  //       view: window,
  //       bubbles: true,
  //       cancelable: true,
  //       buttons: 1,
  //     }),
  //   );
  // };
  // (typeof age=== 'string' && age.length===0) ? undefined : singleDelete()

  // ref={myRef}


  const tableIcons = {
    Add: forwardRef((props, ref) => <AddIcon {...props}  ref={myRef}  onClick={() => singleDelete()} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
<<<<<<< HEAD
=======
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />)
    };

    // onClick={() => age.leng!== 0 ?  singleDelete() : null}
    // onClick={() => singleDelete()}

<<<<<<< HEAD
    const theme = createTheme({
        components: {
          MuiButtonBase: {
            styleOverrides: {
              root: {
                display:'flex !important',
              },
            },
          },
  
        },
      });
=======
    // const theme = createTheme({
    //     components: {
    //       MuiButtonBase: {
    //         styleOverrides: {
    //           root: {
    //             // display:'flex !important',
    //           }
              
    //         },


    //       },
  
    //     },
    //   });
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

        // const filterrr = useCallback(() => {

        //   if (age.length !== 0) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }, [age]);


        const filterrr = useCallback(() => {
          if (age.length !== 0) {
            return true;
          } else {
            return false;
          }
        }, [age]);
        
<<<<<<< HEAD
        const [data, setData] = useState(Data);
        
        useEffect(() => {
          console.log("oldData", Data);
          const newData = Data.filter(filterrr);
          console.log("newData", newData);
          setData(newData);
        }, [filterrr]);

=======
        const [data, setData] = useState([]);  

        // useEffect(() => {

        //   // console.log("oldData", Data);
        //   const newData = Data.filter(filterrr);
        //   // console.log("newData", newData);
        //   setData(newData);




        // }, [filterrr]);


        // const getDocumentTypeForRow = id => {


        //   return data.find(type => type.id === id).expense;
        // };


          // useEffect(() => {
          //   const arrValues = Object.values(data);
          //   const inputTotals = arrValues.reduce((accum, curr) => (accum += curr), 0);
          //   set_total(inputTotals);
          // }, [data]);

            // const changeValues = ({ name, value }) => {
            //     setData({ ...data, [name]: parseInt(value) });
            //   };



          // let dataArray = [...data];

          // for(let i=0; i<dataArray.length; i++)
          // {
          //   if (i> 0) {
        
          //     let expensee = dataArray[i].expense
          //     let cashAdddd = dataArray[i].cashAdd
          //     let  balancee = dataArray[i-1].balanceRs
          //     console.log("expensee: " , (cashAdddd - expensee));
          //     dataArray[i].balanceRs = (cashAdddd - expensee) - balancee;
          //     const lastBalance = (cashAdddd - expensee) - balancee
          //     console.log("Previous: " , dataArray);
          //   }
          // }



// console.log("dawadaw", calculateBalance());
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

      // let [data, setData] = useState(Data);

      // useEffect(() => {
      //   const filterrr = () => {
      //     if (age.length !== 0) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   };
      //   console.log("oldData", data);
      //   const newData = Data.filter(filterrr);
      //   console.log("newData", newData);
      //   setData(newData);
      // }, [age]);


<<<<<<< HEAD
  

  const singleDelete = (d) => {

    const newArr = [...data];
    console.log("newArr",newArr)
=======
  const singleDelete = (d) => {

    const newArr = [...data];
    // console.log("newArr",newArr)
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
    const index = data.findIndex((contact) => contact.tableData.id === d);
    
    const newLength = parseInt(newArr.length)

    newArr.splice(index, 1);

    if(age.length===0 && data === null){
      

      for(let i=0; i<=newLength; i++)
      {
        console.log("index",i)
        newArr.splice(index, 1);
      }

    }
    else{
     return false;
    }

    setData(newArr);
}

<<<<<<< HEAD
// console.log(data[0].description);

// console.log("dada313" , data.filter((Dataa) => Dataa.description));

// const handleChange = (event) => {
//   setAge(event.target.value);
// };

//   const select = (evt) => {
//     if (evt.target.value) {
//       console.log("Selected", evt.target.value);
//       console.log("DATA" , Data);
//       return Data;
//     } else {
//     }
//   };

  // const checkSelect = () => {

  //   if(typeof age === 'string' && age.length === 0){
  //     console.log("selected");
  //     return Data;
  //   }
  //   else{
  //     console.log("empty");
  //   }
  // }
  // console.log("DAAA" , age)

  

  // onChange = (event) => { console.log('change', event.target.value); }

  // {(typeof age=== 'string' && age.length===0) ? Data : undefined}
  
  // const result = setData;
=======
// const previousValues = () => {

//   const prevData = [...data];

//   prevData.forEach((item, index)=> {
//     console.log("dada" ,item.balanceRs);
//     const current = item.balanceRs;

//     if(index>0){
//       console.log("Previous" , data[index-1].balanceRs);
//       const previous = data[index-1].balanceRs;
//       return previous;
//     }

//   })


//  data.forEach((item , index)=> {
//     console.log("Current: " + item.balanceRs);
//     if (index > 0) {

//       let expensee = data[index ].expense
//       let cashAdddd = data[index ].cashAdd
//       let balancee = data[index-1].balanceRs
      
//       return data[index].balanceRs = (cashAdddd - expensee) - balancee;
//       console.log("Previous: " + data[index - 1].balanceRs);
//     }
//   })
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)


  const getData = () => {

    console.log("getData" , data);
<<<<<<< HEAD


  }

  // const { submitForm } = useFormikContext();

  
  // const handleSubmit = () => {
  //   submitForm();
  // }













  return (


    

    <ThemeProvider theme={theme}>
    <div className="App">

    {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={e => {handleChange(e);}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        

      </Select>
    </FormControl> */}




=======
    // console.log("getData" , tableRef.current.values);
  }


  return (

    <div className="App">

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

      {/* <h1>Material Table AutoFocus</h1> */}
      <div style={{ maxWidth: "100%" }}>


      {/* <Button onClick={() => clickElement(myRef)}>ADD</Button> */}

        <MaterialTable
<<<<<<< HEAD

        

          columns={[
            {title: '#', render:(rowData)=>rowData.tableData.id+1},
=======
        

          columns={[
            {title: '#',
            render:(rowData)=>rowData.tableData.id+1},
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)

            {
              title: 'Date', field: 'date',
                      //  cellStyle: {
                      //  textAlign:'center'
                      
                      // },
                      // headerStyle:{
                      //   textAlign:'center'
                      //  },
<<<<<<< HEAD
=======
              validate: rowData => rowData.date === '' ? { isValid: false, helperText: 'description cannot be empty' } : true,
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
              editComponent: props => (
                <Input 
                  type="date"
                  defaultValue={props.value}
                  onChange={e => props.onChange(e.target.value)}
                />
<<<<<<< HEAD
              )
=======
              ),
              filterComponent: ({ columnDef, onFilterChanged }) => (
                <Input
                  type="text"
                  placeholder="Filter column"
                  onChange={(e) => {
                    // Calling the onFilterChanged with the current tableId and the new value
                    onFilterChanged(columnDef.tableData.id, e.target.value);
                  }}
                />
              ),
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
            },

            {
              title: 'Description', field: 'description',
<<<<<<< HEAD
=======

>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
              // cellStyle: {
              //   textAlign:'center'
               
              //  },
              //  headerStyle:{
              //   textAlign:'center'
              //  },
<<<<<<< HEAD

              editComponent: props => (
=======
              validate: rowData => rowData.description === '' ? { isValid: false, helperText: 'description cannot be empty' } : true,
              editComponent: props => (
                
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                <Input
                  type="text"
                  defaultValue={props.value}
                  onChange={e => props.onChange(e.target.value)}
<<<<<<< HEAD
                />
              )
=======
                  
                />
              ),
              filterComponent: ({ columnDef, onFilterChanged }) => (
                <Input
                  type="text"
                  placeholder="Filter column"
                  onChange={(e) => {
                    // Calling the onFilterChanged with the current tableId and the new value
                    onFilterChanged(columnDef.tableData.id, e.target.value);
                  }}
                />
              ),
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
            },
              {
                title: "Cash Add",
                field: "cashAdd",
                // cellStyle: {
                //   textAlign:'center'
                 
                //  },
                //  headerStyle:{
                //   textAlign:'center'
                //  },
<<<<<<< HEAD
=======
                validate: rowData => rowData.cashAdd === '' ? { isValid: false, helperText: 'description cannot be empty' } : true,
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                editComponent: props => (
                  <Input
                    type="number"
                    defaultValue={props.value}
                    onChange={e => props.onChange(e.target.value)}
                  />
<<<<<<< HEAD
                )
=======
                ),
                filterComponent: ({ columnDef, onFilterChanged }) => (
                  <Input
                    type="text"
                    placeholder="Filter column"
                    onChange={(e) => {
                      // Calling the onFilterChanged with the current tableId and the new value
                      onFilterChanged(columnDef.tableData.id, e.target.value);
                    }}
                  />
                ),
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
              },
              {
                title: "Expense",
                field: "expense",
                // cellStyle: {
                //   textAlign:'center'
                 
                //  },
                //  headerStyle:{
                //   textAlign:'center'
                //  },
<<<<<<< HEAD
=======
                validate: rowData => rowData.expense === '' ? { isValid: false, helperText: 'description cannot be empty' } : true,
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                editComponent: props => (
                  <Input
                    type="number"
                    defaultValue={props.value}
<<<<<<< HEAD
                    onChange={e => props.onChange(e.target.value)}
                  />
                )
=======
                      onChange={e => props.onChange(e.target.value)}
                  />
                ),
                filterComponent: ({ columnDef, onFilterChanged }) => (
                  <Input
                    type="text"
                    placeholder="Filter column"
                    onChange={(e) => {
                      // Calling the onFilterChanged with the current tableId and the new value
                      onFilterChanged(columnDef.tableData.id, e.target.value);
                    }}
                  />
                ),
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
              },
              {
                title: "Balance Rs",
                field: "balanceRs",
<<<<<<< HEAD
=======
                // render: rowData => getDocumentTypeForRow(rowData.typeId),
                filtering: false,
                render:(rowData)=>{
                  // const result = rowData.cashAdd - rowData.expense;
                  // // const result = rowData.cashAdd - rowData.expense;
                  // // return result;
                  // return result;
                },
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                // cellStyle: {
                //   textAlign:'center'
                 
                //  },
                //  headerStyle:{
                //   textAlign:'center'
                //  },
<<<<<<< HEAD
                editComponent: props => (
                  <Input
                    type="number"
                    defaultValue={props.value}
                    onChange={e => props.onChange(e.target.value)}
=======
                editComponent: props => ( 
                      
                  <Input
                   disabled
                    type="number"
                    value={props.data}
                    onChange={e => props.onChange(e.target.value)}
               
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                  />
                )
              },
            
          ]}


          // (typeof age=== 'string' && age.length===0) ? undefined : data
          data={data}

          // data={data}
          title="Balance Sheet Table"
          
          // icons={{
          //   Add: props => <AddIcon   onClick={()=> singleDelete()} />,
          //   Edit: props => <EditIcon />,
          //   Delete: props => <DeleteIcon />,
          //   Clear: props => <DeleteIcon />,
          //   Check: props => <CheckIcon />,
          //   Search: props => <SearchIcon />,
          //   ResetSearch: props => <DeleteIcon />
          // }}
          icons={tableIcons}

          // components={{
          //   Row: props => <MTableBodyRow {...props} onFilterChanged={(columnId, value) => {
          //     props.onFilterChanged(columnId, value);
          //     if(age.length=== 0 ){
          //       return null;
          //     }
          //     else{
          //       return data;
          //     }
          //     console.log("helloadada" , data);
          //   }}/>
          // }}
          // {
          //   render: rowData => {
          //      if (!rowData.headerRow) {
          //         return <h2>yes</h2> 
          //      } else {
          //         return false
          //      }
          //   }
          //   }
          // components={{
          //   Header: (props) => (
          //     <thead
          //       style={{
          //         textAlign: "center",
          //         alignItems: "center",
          //         justifyContent: "center",
          //         display: "flex"
          //       }}
          //     >
          //       <MTableHeader {...props} />
          //     </thead>
          //       )
          //       }}

          localization={{
            toolbar: {
              searchPlaceholder: "Search Here"
            }
          }}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
<<<<<<< HEAD
    
=======
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  
                  resolve()
                }, 1000)
              }),
          }}

          options={{
            rowStyle: {
              backgroundColor: '#EEE',
            },
            actionsColumnIndex: -1,
            exportButton: true,
            paging:true,
            pageSize:5,      
            emptyRowsWhenPaging: false,   
            pageSizeOptions:[5,10,20,50], 
<<<<<<< HEAD
            search: true,
=======
            paginationType:"stepped",
            search: true,
            filtering: true,
            exportFileName:"Balance Sheet",
            addRowPosition:"first",
            exportAllData:true,
            // grouping: true,
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
            headerStyle: {
              textAlign: "right !important",
              whiteSpace: "nowrap"
            },
            // selection: true,
            
          }}




        />




      </div>
      
      <br />
      <br />

      <Button  variant='contained' color='primary' onClick={()=> {getData() ; setShow(false)}} >Save</Button>

    </div>

<<<<<<< HEAD
    </ThemeProvider>
=======
>>>>>>> 65211c3 (updated filesgit remote add origin https://github.com/humailsaleem123/Balance-Sheet-React.git)
  );
}

export default DashboardTable;
