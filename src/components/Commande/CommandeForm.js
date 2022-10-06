import React, { useState,useEffect } from 'react';
import MaterialTable from 'material-table'
import Button from 'react-bootstrap/Button'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
import { Link } from 'react-router-dom';

const CommandeForm = ({ empList }) => {
    
    const [filteredData,setFilteredData]=useState(empList)
    const [filter, setFilter]=useState(true)
    const [year,setYear]=useState('all')
    const columns = [
      { title: "ID", field: "id" },
      { title: "Email", field: "email" },
      { title: "Type", field: "type" },
      { title: "Phone", field: 'phone' },
    ]
    const [selectedRow, setSelectedRow] = useState(null);

    
    const handleChange=()=>{
        setFilter(!filter)
    }
    useEffect(()=>{
        setFilteredData(year==='all'?empList:empList.filter(dt=>dt.type === year))
    },[empList,year])

    return (
        
        <div className="App">
            
            <h1 align="center">ESTI</h1>
            <h4 align='center'>Liste de tous les étudiants</h4>
            
            
            <MaterialTable
            onRowClick={(evt, selectedRow) =>
                setSelectedRow(selectedRow.tableData.id)
              }
                title=""
                data={filteredData}
                columns={columns}
                options={{
                    filtering:filter,
                    exportButton: true,
                    rowStyle: (rowData) => ({
                        backgroundColor:
                          selectedRow === rowData.tableData.id ? "#333" : "#FFF",
                      }),
                    grouping: true,
                    }}
                    detailPanel={[
                        {
                          tooltip: "Show Name",
                          render: (rowData) => {
                            return (
                              <div
                                style={{
                                  fontSize: 100,
                                  textAlign: "center",
                                  color: "white",
                                  backgroundColor: "#333"
                                }}
                              >
                                {/*rowData.candidat.nom*/}
                                <Button variant="primary"><Link to={`/listeDesEtudiants/${rowData.id}`} style={{color:'white', textDecoration:'none'}}>Détails</Link></Button>{' '}
                                <Button variant="danger"><Link to={``} style={{color:'white', textDecoration:'none'}}>Abandon</Link></Button>{' '}
                              </div>
                            );
                          }
                        }
                      ]}
                actions={[
                {
                    icon:()=><Checkbox
                    checked={filter}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />,
                tooltip:"Hide/Show Filter option",
                isFreeAction:true
                },
                {
                    icon:()=><Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{width:100}}
                    value={year}
                    onChange={(e)=>setYear(e.target.value)}
                >
                    <MenuItem value={"all"}><em>All</em></MenuItem>
                    <MenuItem value={'entreprise'}>entreprise</MenuItem>
                    <MenuItem value={'public'}>public</MenuItem>
                </Select>,
                tooltip:"Filter Year",
                isFreeAction:true
                }
                ]}
            />
        </div>
    );
}

export default CommandeForm;