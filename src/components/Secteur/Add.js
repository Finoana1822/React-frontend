import { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('');
    const [niveau, setNiveau] = useState('');
    const [accompagnement, setAccompagnement] = useState('');
    const [support, setSupport] = useState('');
    const [outil, setOutil] = useState('');
    const [logicielle, setLogicielle] = useState('');
    const [plateform_spec, setPlateform] = useState('');
    const [prix_min, setMin] = useState('');
    const [prix_max, setMax] = useState('');
    const history = useHistory();

    const handlesubmit = (e) => {
        e.preventDefault();
        const secteur = {nom, categorie, niveau, accompagnement, support, outil, logicielle, plateform_spec, prix_min, prix_max};
    
        fetch('http://localhost:4000/secteurs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(secteur)
        }).then(() => {
          history.push('/');
        })
      }

    return (
        <div className="Add">
        <h2>Ajouter un Secteur</h2>
        <form onSubmit={handlesubmit}>
          <label>Secteur:</label>
          <input 
            type="text" 
            required 
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <label>Catégorie:</label>
          <select
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">c</option>
            <option value="D">D</option>
          </select>
          <label>Niveau de technicité exigé:</label>
          <select
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
          >
            <option value="Bas">Bas</option>
            <option value="Moyen">Moyen</option>
            <option value="Haut">Haut</option>
          </select>
          <label>Accompagnement Nécessaire:</label>
          <select
            value={accompagnement}
            onChange={(e) => setAccompagnement(e.target.value)}
          >
            <option value="Basique">Basique</option>
            <option value="Moyen">Moyen</option>
            <option value="Poussé">Poussé</option>
          </select>
          <label>Support:</label>
          <select
            value={support}
            onChange={(e) => setSupport(e.target.value)}
          >
            <option value="Physiques">Physiques</option>
            <option value="Numériques">Numériques</option>
          </select>
          <label>Outils de formation:</label>
          <select
            value={outil}
            onChange={(e) => setOutil(e.target.value)}
          >
            <option value="PC">PC</option>
            <option value="Connexion">Connexion</option>
            <option value="PC / Connexion">PC / Connexion</option>
          </select>
          <label>Locigiels de formation:</label>
          <select
            value={logicielle}
            onChange={(e) => setLogicielle(e.target.value)}
          >
            <option value="Libre">Libre</option>
            <option value="Payant">Payant</option>
          </select>
          <label>plateformes Spécifiques:</label>
          <select
            value={plateform_spec}
            onChange={(e) => setPlateform(e.target.value)}
          >
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
          <label>Taux Horaires Minimum:</label>
          <input 
            type="text" 
            required 
            value={prix_min}
            onChange={(e) => setMin(e.target.value)}
          />
          <label>Taux Horaires Maximum:</label>
          <input 
            type="text" 
            required 
            value={prix_max}
            onChange={(e) => setMax(e.target.value)}
          />
          <button>Ajouter</button>
        </form>
      </div>
    );
}
 
export default Add;