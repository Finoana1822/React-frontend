import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import '../../styles/calendrier.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function CalendrierFormation() {
  const link = "http://localhost:8000/api/commandes/valider"
  const [commandes, setCommandes] = useState([]);
  // const getFormations = async () => {
  //   await 
  // }
  
  useEffect(()=>{
    // getFormations()
    axios.get(link).then(
      (res) => {
        setCommandes(res.data)
        console.log(commandes)
      }
    )
  },[])


  // let events = [
  //   { title: 'event 1', date: '2022-10-08' }
  // ]
  // events.push(
    
  // );
// console.log(events)
  return (
    <><div className="container">
      <div className="calendrier">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={
            commandes.map((commande)=>{
              return { title: `${commande.code}:${commande.name}`, start: commande.date_debut, end: commande.date_fin, color:'green'}
            })
          } />
      </div>
   </div></>
  )
}
