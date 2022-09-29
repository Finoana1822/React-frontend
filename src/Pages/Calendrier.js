import { Routes, Route, Navigate } from "react-router-dom";
import CalendrierFormation from "../components/Calendrier/CalendrierFormation";
import CalendrierProspection from "../components/Calendrier/CalendrierProspection";

const Calendrier = () => {
    return (
      <Routes>
          <Route path='/' element = {<Navigate to={'/cal_formation'}/> }/>
          <Route path='/cal_formation' element = { <CalendrierFormation/>}/>
          <Route path='/cal_prospection' element = {<CalendrierProspection />} />
      </Routes>
    )
}
 
export default Calendrier;