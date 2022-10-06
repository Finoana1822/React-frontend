import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

const FormDialog = ({open,handleClose,data,onChange,handleFormSubmit}) => {
 const {id,nom,categorie,niveau,accompagnement,support,outil,logicielle,plateform_spec}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Modifié secteur":"Créer nouveau secteur"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField id="nom" value={nom} onChange={e=>onChange(e)} placeholder="Entrer le secteur" label="Secteur" variant="outlined" margin="dense" fullWidth />
             <TextField id="categorie" value={categorie} onChange={e=>onChange(e)} placeholder="Entrer la catégorie" label="Catégorie" variant="outlined" margin="dense" fullWidth />
             <TextField id="niveau" value={niveau} onChange={e=>onChange(e)} placeholder="Entrer le Niveau" label="Niveau" variant="outlined" margin="dense" fullWidth />
             <TextField id="accompagnement" value={accompagnement} onChange={e=>onChange(e)} placeholder="Accompagnement nécessaire" label="Accompagnement nécessaire" variant="outlined" margin="dense" fullWidth />
             <TextField id="support" value={support} onChange={e=>onChange(e)} placeholder="Support exigé" label="Support" variant="outlined" margin="dense" fullWidth />
             <TextField id="outil" value={outil} onChange={e=>onChange(e)} placeholder="Outil nécessaire" label="Outil nécessaire" variant="outlined" margin="dense" fullWidth />
             <TextField id="logicielle" value={logicielle} onChange={e=>onChange(e)} placeholder="Logiciel de formation" label="Logiciel" variant="outlined" margin="dense" fullWidth />
             <TextField id="plateform_spec" value={plateform_spec} onChange={e=>onChange(e)} placeholder="La plateforme spécifique" label="Plateforme" variant="outlined" margin="dense" fullWidth />
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
