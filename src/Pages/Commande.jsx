import useFetch from '../components/Commande/useFetch'
import React from 'react';
//import './ListeDesEtudiants.css'
import CommandeForm from '../components/Commande/CommandeForm';

function Commande() {
    const { error, isPending, data:empList } = useFetch('http://localhost:4000/custommers')
  return (
    <div className="home">
        { /*error && <div>{ error }</div> */}
        { isPending && <div>
                            <div className="spinner">
                                <div className="rect1"></div>
                                <div className="rect2"></div>
                                <div className="rect3"></div>
                                <div className="rect4"></div>
                                <div className="rect5"></div>
                            </div>
                        </div> 
        }
        {empList && <CommandeForm empList={empList} />}
    </div>
  );
}

export default Commande