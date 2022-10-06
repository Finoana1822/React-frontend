import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

const FormDialog = ({open,handleClose,data,onChange,handleFormSubmit}) => {
 const {id,code,titre,categorie,nb_jour,nb_vente,nb_demande,cible,id_secteur,prix_min,prix_max,prix_affiche}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Modifié formation":"Créer nouveau formation"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField id="code" value={code} onChange={e=>onChange(e)} placeholder="Entrer le secteur" label="Secteur" variant="outlined" margin="dense" fullWidth />
             <TextField id="titre" value={titre} onChange={e=>onChange(e)} placeholder="Entrer la catégorie" label="Catégorie" variant="outlined" margin="dense" fullWidth />
             <TextField id="categorie" value={categorie} onChange={e=>onChange(e)} placeholder="Entrer le Niveau" label="Niveau" variant="outlined" margin="dense" fullWidth />
             <TextField id="nb_jour" value={nb_jour} onChange={e=>onChange(e)} placeholder="Accompagnement nécessaire" label="Accompagnement nécessaire" variant="outlined" margin="dense" fullWidth />
             <TextField id="nb_vente" value={nb_vente} onChange={e=>onChange(e)} placeholder="Support exigé" label="Support" variant="outlined" margin="dense" fullWidth />
             <TextField id="nb_demande" value={nb_demande} onChange={e=>onChange(e)} placeholder="Outil nécessaire" label="Outil nécessaire" variant="outlined" margin="dense" fullWidth />
             <TextField id="cible" value={cible} onChange={e=>onChange(e)} placeholder="Logiciel de formation" label="Logiciel" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">Fermer</Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Mofifier":"Envoyer"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
