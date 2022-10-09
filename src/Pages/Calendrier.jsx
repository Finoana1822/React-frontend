import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import CalendrierFormation from "../components/Calendrier/CalendrierFormation";
import CalendrierProspection from "../components/Calendrier/CalendrierProspection";

const Calendrier = () => {
    return (
        
        <><ul className="nav nav-pills nav-fill row">
            <li className="offset-4 col-2">
                <NavLink to={"cal_formation"} className="nav-link">Calendrier de formation</NavLink>
            </li>
            <li className="col-2">
                <NavLink to={"cal_prospection"} className="nav-link">Calendrier de prospection</NavLink>
            </li>
        </ul>
        <Routes>
            <Route exact path='/' element={<Navigate to={'cal_formation'} />} />
            <Route path='/cal_prospection' element={<CalendrierProspection />} />
            <Route path='/cal_formation' element={<CalendrierFormation />} />
        </Routes></>
    )
}
 
export default Calendrier;