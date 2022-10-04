import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import FormDialog from '../components/Secteur/dialog';
const initialValue = { nom: "", categorie: "", niveau: "", accompagnement: "", support: "", logicielle: "", plateform_spec: "", prix_min: "", prix_max: ""}

function Secteur() {
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = `http://localhost:4000/secteurs`
  const columnDefs = [
    { headerName: "Secteur", field: "nom", },
    { headerName: "catégorie", field: "categorie", },
    { headerName: "Niveau", field: "niveau" },
    { headerName: "Accompagnement", field: "accompagnement" },
    { headerName: "Support", field: "support" },
    { headerName: "Logiciel", field: "logicielle", },
    { headerName: "Plateforme", field: "plateform_spec", },
    { headerName: "TH min", field: "prix_min", },
    { headerName: "TH max", field: "prix_max", },
    {
      headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>U</Button>
        <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.value)}>D</Button>
      </div>
    }
  ]
  // calling getUsers function for first time 
  useEffect(() => {
    getSecteur()
  }, [])

  //fetching user data from server
  const getSecteur = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }
  const onChange = (e) => {
    const { value, id } = e.target
    // console.log(value,id)
    setFormData({ ...formData, [id]: value })
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }

  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  //deleting a user
  const handleDelete = (id) => {
    const confirm = window.confirm("Etes-vous sûr de supprimer cette ligne?", id)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getSecteur())

    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Etes-vous sûr de modifier cette ligne?")
      confirm && fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getSecteur()

        })
    } else {
      // adding new user
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getSecteur()
        })
    }
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  return (
    <div className="App">
      <h1 align="center">Secteur</h1>
      <h3>Secteur de formation continue</h3>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Ajouter un secteur</Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
      <FormDialog open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Secteur;