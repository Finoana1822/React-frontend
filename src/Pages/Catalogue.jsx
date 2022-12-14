import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = axios.create({
  baseURL: `http://localhost:4000/catalogues`
})

const Catalogue = () => {

  var columns = [
    { title: "Catalogue", field: "catalogue" },
    { title: "Cat??gorie", field: "categorie" },
    { title: "Intitul?? de Formation", field: 'id_formation' },
    { title: "Code", field: "code" },
    { title: "Pr??requis", field: "prerequis" },
    { title: "Dur??e (1 ?? 6jour )", field: "duree" },
    { title: "Cible", field: "cible" },
    { title: "Prix Min", field: "prix_min" },
    { title: "Prix Max", field: "prix_max" },
  ]
  
  const [donnee, setDonne] = useState(null)
  fetch('http://localhost:4000/catalogues').then((res)=>{
   return res.json()
  }).then((d)=>{
    setDonne(d)
  })

  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])


  //Modification de la ligne
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
    if(newData.catalogue === ""){
      errorList.push("Please enter first name")
    }
    if(newData.categorie === ""){
      errorList.push("Please enter last name")
    }
    if(newData.id_formation === ""){
      errorList.push("Please enter a valid email")
    }
    if(newData.code === ""){
      errorList.push("Please enter a valid email")
    }
    if(newData.prerequis === ""){
      errorList.push("Please enter a valid email")
    }
    if(newData.duree === ""){
      errorList.push("Please enter a valid email")
    }
    if(newData.cible === ""){
      errorList.push("Please enter a valid email")
    }
    if(newData.prix_min === ""){
      errorList.push("Please enter a valid email")
    }
    if(newData.prix_max === ""){
      errorList.push("Please enter a valid email")
    }
    
    if(errorList.length < 1){
      api.patch("/catalogues/"+newData.id, newData)
      .then(res => {
        const dataUpdate = [...donnee];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setDonne([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }


  //Add Data 
  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if(newData.catalogue === undefined){
      errorList.push("Please enter first name")
    }
    if(newData.categorie === undefined){
      errorList.push("Please enter last name")
    }
    if(newData.id_formation === undefined){
      errorList.push("Please enter a valid email")
    }
    if(newData.code === undefined){
      errorList.push("Please enter a valid email")
    }
    if(newData.prerequis === undefined){
      errorList.push("Please enter a valid email")
    }
    if(newData.duree === undefined){
      errorList.push("Please enter a valid email")
    }
    if(newData.cible === undefined){
      errorList.push("Please enter a valid email")
    }
    if(newData.prix_min === undefined){
      errorList.push("Please enter a valid email")
    }
    if(newData.prix_max === undefined){
      errorList.push("Please enter a valid email")
    }

    if(errorList.length < 1){ //no error
      api.post("/catalogues", newData)
      .then(res => {
        let dataToAdd = [...donnee];
        dataToAdd.push(newData);
        setDonne(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }

    
  }

  //Delete Data
  const handleRowDelete = (oldData, resolve) => {
    api.delete("/catalogues/"+oldData.id)
      .then(res => {
        const dataDelete = [...donnee];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setDonne([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }


  return (
    
    <div className="App">
      <h1>Hello</h1>
      { donnee &&
      <Grid container spacing={1}>
          <Grid item xs={3}></Grid>
          <Grid item xs={12}>
          <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div>
            <MaterialTable
              title="User data from remote source"
              columns={columns}
              data={donnee}
              icons={tableIcons}
              options={
               {
                filterRowStyle: true,
                filtering:true,
                exportAllData:true
               }
              }
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);
                      
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    handleRowAdd(newData, resolve)
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                  }),
              }}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      }
    </div>
  );
}

export default Catalogue;