import React, { useState, useEffect } from "react";
import axios from "axios";
import SecteurFrom from "../components/Secteur/SecteurFrom";
import { SelectColumnFilter } from "../components/Secteur/Filter";

import "../styles/App.css";

function Secteur() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://api.tvmaze.com/search/shows?q=girls")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      Header: "Secteur",
      accessor: "show.name",
    },
    {
      Header: "Catégorie",
      accessor: "show.type",
    },
    {
      Header: "Niveau",
      accessor: "show.language",
    },
    {
      Header: "Accompagnement",
      accessor: "show.officialSite",
      Cell: ({ cell: { value } }) =>
        value ? <a href={value}>{value}</a> : "-",
    },
    {
      Header: "Support",
      accessor: "show.rating.average",
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Outils",
      accessor: "show.status",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
    {
      Header: "Logiciels",
      accessor: "show.premiered",
      // disable the filter for particular column
      disableFilters: true,
      Cell: ({ cell: { value } }) => value || "-",
    },
    {
      Header: "Plateforme",
      accessor: "show.schedule.time",
      disableFilters: true,
      Cell: ({ cell: { value } }) => value || "-",
    },
  ];

  return (
    <div className="App">
      <h1>
        <center>Secteur</center>
      </h1>
      <SecteurFrom columns={columns} data={data} />
    </div>
  );
}

export default Secteur;
