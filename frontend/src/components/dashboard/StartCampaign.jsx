import { useState } from 'react';
import { Button, Snackbar, TextField, Dialog, DialogTitle, DialogContent, DialogActions, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axiosObj from '@/axios/axiosConfig';

export default function StartCampaign() {
const [showDialog, setShowDialog] = useState(false);
const [formData, setFormData] = useState({
nom: '',
prenom: '',
tel: '',
genre: '',
grade: '',
});

const [openToast, setOpenToast] = useState(false);
const [alertMessage, setAlertMessage] = useState('');

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async () => {
try {
// Your submission logic here
setAlertMessage('Submission successful!');
setOpenToast(true);
setShowDialog(false);
} catch (error) {
console.error('Error submitting form:', error);
setAlertMessage('Error submitting form!');
setOpenToast(true);
}
};

const handleCloseToast = () => {
setOpenToast(false);
};

const handleCancel = () => {
// Reset form data
setFormData({
nom: '',
prenom: '',
tel: '',
genre: '',
grade: '',
});
setShowDialog(false);
};

const handleOpenDialog = () => {
setShowDialog(true);
};

const handleCommencer = () => {
// Add logic to handle commencer button
console.log('Commencer button clicked!');
};

return (
<div className='parent p-5'>
<div className='p-2 w-75 bg-dark rounded rounded-4 shadow'>
<h2 className='d-block text-center text-danger'>Detail Compagne</h2>

ini
Copy
    <div className="mb-3 w-75 mx-auto">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Button
          variant="contained"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ff8c8c, #ff6666)',
            color: 'white', 
          }}
          onClick={handleOpenDialog}
        >
          Add Staff
        </Button>
        <Button
          variant="contained"
          style={{ 
            marginLeft: '10px',
            backgroundImage: 'linear-gradient(to right, #ff6666, #f96363)',
            color: 'white', 
          }}
          onClick={handleOpenDialog}
        >
          Add Equipe
        </Button>
      </div>
      <Button
        variant="contained"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ff3333, #ff6666)',
          color: 'white',
          marginTop: '10px',
        }}
        onClick={handleCommencer}
      >
        Commencer
      </Button>
    </div>
  </div>
  <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
    <DialogTitle>Add {formData.grade ? 'Equipe' : 'Staff'}</DialogTitle>
    <DialogContent>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <TextField
          label="Nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          variant="outlined"
          className="mb-3"
          sx={{ marginRight: '10px', width: '48%' }}
        />
        <TextField
          label="Prénom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          variant="outlined"
          className="mb-3"
          sx={{ width: '48%' }}
        />
      </div>
      <TextField
        label="Téléphone"
        name="tel"
        value={formData.tel}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className="mb-3"
      />
      <FormControl component="fieldset" className="mb-3">
        <FormLabel component="legend">Genre</FormLabel>
        <RadioGroup
          aria-label="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          row
        >
          <FormControlLabel 
            value="homme" 
            control={<Radio />} 
            label="Homme" 
            sx={{ marginRight: '10px' }}
          />
          <FormControlLabel 
            value="femme" 
            control={<Radio />} 
            label="Femme" 
          />
        </RadioGroup>
      </FormControl>
      <TextField
        label="Grade"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        className="mb-3"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCancel} color="secondary">
        Annuler
      </Button>
      <Button onClick={handleSubmit} color="primary">
        Soumettre
      </Button>
    </DialogActions>
  </Dialog>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={openToast}
    autoHideDuration={6000}
    onClose={handleCloseToast}
  >
    <MuiAlert onClose={handleCloseToast} severity="success" sx={{ width: '100%' }}>
      {alertMessage}
    </MuiAlert>
  </Snackbar>
</div>
);
}