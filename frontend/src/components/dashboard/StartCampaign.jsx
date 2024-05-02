import { useState } from 'react';
import { Button, Snackbar, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axiosObj from '@/axios/axiosConfig';

export default function StartCampaign() {
const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
const [openToast, setOpenToast] = useState(false);
const [formData, setFormData] = useState({
nom: '',
prenom: '',
tel: '',
genre: '',
grade: '',
});

const handleAddStaff = async () => {
setShowAlert(true);
setFormData({
nom: '',
prenom: '',
tel: '',
genre: '',
grade: '',
});
};

const handleAddEquipe = async () => {
setShowAlert(true);
setFormData({
CIN: '',
nom: '',
prenom: '',
age: '',
role: '',
genre: '',
tel: '',
});
};

const handleSubmit = async () => {
try {
if (Object.values(formData).some(val => val === '')) {
setAlertMessage('Please fill out all fields');
setOpenToast(true);
} else {
if (formData.CIN) {
await axiosObj.post('/add-equipe', formData);
setAlertMessage('Equipe added successfully!');
} else {
await axiosObj.post('/add-staff', formData);
setAlertMessage('Staff added successfully!');
}
setOpenToast(true);
setShowAlert(false);
}
} catch (error) {
console.error('Error adding staff/equipe:', error);
setAlertMessage('Error adding staff/equipe!');
setOpenToast(true);
}
};

const handleCommencer = async () => {
try {
// Assuming formData contains campaign details
await axiosObj.post('/add-campaign', formData);
setAlertMessage('Campaign added successfully!');
setOpenToast(true);
} catch (error) {
console.error('Error adding campaign:', error);
setAlertMessage('Error adding campaign!');
setOpenToast(true);
}
};

const handleCloseToast = () => {
setOpenToast(false);
};

const handleCloseAlert = () => {
setShowAlert(false);
};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

return (
<div className='parent p-5'>
<div className='p-2 w-75 bg-light rounded rounded-4 shadow'>
<h2 className='d-block text-center text-danger'>Detail Compagne</h2>
<div className="mb-3 w-75 mx-auto">
      <Button
        variant="contained"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ff8c8c, #ff6666)', // Light red to dark red gradient
          color: 'white', // Text color
        }}
        onClick={handleAddStaff}
      >
        Add Staff
      </Button>
      <Button
        variant="contained"
        style={{ 
          marginLeft: '10px', // Add some spacing
          backgroundImage: 'linear-gradient(to right, #ff6666, #f96363)', // Dark red to light red gradient
          color: 'white', // Text color
        }}
        onClick={handleAddEquipe}
      >
        Add Equipe
      </Button>
      <Button
        variant="contained"
        style={{ 
          marginLeft: '10px', // Add some spacing
          backgroundImage: 'linear-gradient(to right, #ff3333, #ff6666)', // Bright red to dark red gradient
          color: 'white', // Text color
        }}
        onClick={handleCommencer}
      >
        Commencer
      </Button>
    </div>
  </div>
  <Dialog open={showAlert} onClose={handleCloseAlert}>
    <DialogTitle>{formData.CIN ? 'Add Equipe' : 'Add Staff'}</DialogTitle>
    <DialogContent>
      {Object.keys(formData).map(key => (
        <TextField
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          value={formData[key]}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className="mb-3"
        />
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={handleSubmit} color="secondary">
        Submit
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

