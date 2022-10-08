import '../styles/App.css';
import Navbar from './SidebarNavbar/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom'
import DashBoard from '../Pages/DashBoard';
import Secteur from '../Pages/Secteur';
import Catalogue from '../Pages/Catalogue';
import Formation from '../Pages/Formation';
import Commande from '../Pages/Commande';
import Calendrier from '../Pages/Calendrier';
import Test from '../Test/Test';
import TestTable from '../TestTable/TestTable';
import TestTableau from '../TestTableau/TestTableau';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element = { <Navigate to={'/dashBoard'}/>}/>
          <Route path='/dashBoard' element = { <DashBoard/>}/>
          <Route path='/test' element = { <Test/>}/>
          <Route path='/testtable' element = { <TestTable/>}/>
          <Route path='/testtableau' element = { <TestTableau/>}/>
          <Route path='/secteur' element = {<Secteur />} />
          <Route path='/catalogue' element = {<Catalogue />} />
          <Route path='/formation' element = {<Formation />} />
          <Route path='/commande' element = {<Commande />} />
          <Route path='/calendrier' element = {<Calendrier />} />
      </Routes>
    </div>
  );
}

export default App;
