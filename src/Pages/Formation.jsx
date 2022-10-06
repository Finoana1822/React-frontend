import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import FormDialog from '../components/Formation/FormationForm'
import {BsTrashFill, BsFillPencilFill} from 'react-icons/bs'
const initialValue = { code: "", titre: "", categorie: "", nb_jour: "", nb_vente: "",nb_demande:"",cible:"", id_secteur:"",prix_min:"",prix_max:"", prix_affiche: ""}

function Formation() {
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
  const url = `http://localhost:4000/formations`
  const columnDefs = [
    { headerName: "Code", field: "code", },
    { headerName: "Titre", field: "titre", },
    { headerName: "catégorie", field: "categorie", },
    { headerName: "Jour", field: "nb_jour" },
    { headerName: "Vente", field: "nb_vente" },
    { headerName: "Demande", field: "nb_demande" },
    { headerName: "Cible", field: "cible", },
    { headerName: "Secteur", field: "id_secteur", },
    { headerName: "Prix min", field: "prix_min", },
    { headerName: "Prix max", field: "prix_max", },
    { headerName: "Total", field: "prix_affiche", },
    {
      headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
        <Button color="primary" onClick={() => handleUpdate(params.data)}>{<BsFillPencilFill />}</Button>
        <Button color="secondary" onClick={() => handleDelete(params.value)}>{<BsTrashFill />}</Button>
      </div>
    }
  ]
  // calling getUsers function for first time 
  useEffect(() => {
    getFormation()
  }, [])

  //fetching user data from server
  const getFormation = () => {
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
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getFormation())

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
          getFormation()

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
          getFormation()
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
      <h1 align="center">Formation</h1>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Ajouter une formation</Button>
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

export default Formation;