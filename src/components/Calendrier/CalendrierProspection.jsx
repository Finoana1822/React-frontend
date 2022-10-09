import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import '../../styles/calendrier.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function CalendrierProspection() {
  const link = "http://localhost:8000/api/prospections"
  const [prospections, setProspections] = useState([]);
  // const getFormations = async () => {
  //   await 
  // }
  
  useEffect(()=>{
    // getFormations()
    axios.get(link).then(
      (res) => {
        setProspections(res.data)
        console.log(prospections)
      }
    )
  },[])

  return (
    <><div className="container">
      <div className="calendrier">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={
            prospections.map((prospection)=>{
              return { title: `${prospection.cible}`, date: prospection.date, color:'red'}
            })
          } />
      </div>
   </div></>
  )
}
