import { Routes, Route, NavLink } from "react-router-dom";
import CalendrierFormation from "../components/Calendrier/CalendrierFormation";
import CalendrierProspection from "../components/Calendrier/CalendrierProspection";

const Calendrier = () => {
    return (
        <><ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <NavLink to={"/cal_formation"} className="nav-link active">cal_formation</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/cal_prospection"} className="nav-link">cal_prospection</NavLink>
            </li>
        </ul>
        <Routes>
            {/* <Route path='/' element={<Navigate to={'/cal_formation'} />} /> */}
            <Route path='/cal_formation' element={<CalendrierFormation />} />
            <Route path='/cal_prospection' element={<CalendrierProspection />} />
        </Routes></>
    )
}
 
export default Calendrier;