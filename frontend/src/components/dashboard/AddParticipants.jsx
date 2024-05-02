import { useState } from 'react';
import { Button as Btn, TextField, RadioGroup, Radio, FormControlLabel, FormGroup } from '@mui/material';
import { DeleteForever, Remove } from '@mui/icons-material';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { Button } from '@mui/joy';
import { HashLoader } from 'react-spinners';

export default function AddParticipants() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        CIN: '',
        nom: '',
        prenom: '',
        genre: '',
        tel: '',
        age: '',
        addresse: '',
        bloodType: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);

        // Set a timeout to toggle off the loading indicator after 3 seconds (adjust as needed)
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };


    return (
        <div className='p-5 mx-auto' style={{width:"90%"}}>
            <div className="d-flex justify-content-between">
                <Button
                    variant="outlined"
                    color="danger"
                    endDecorator={<DeleteForever />}
                    onClick={() => setOpen(true)}
                >
                    Discard
                </Button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog>
                        <DialogTitle>Elimenate Participant</DialogTitle>
                        <DialogContent>Saisit le CIN du Participant</DialogContent>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                setOpen(false);
                            }}
                        >
                            <Stack>
                                <FormControl>
                                    <FormLabel>CIN</FormLabel>
                                    <Input autoFocus required />
                                </FormControl>
                               
                                <Button className='mt-4' type="submit">Eleminate</Button>
                            </Stack>
                        </form>
                    </ModalDialog>
                </Modal>
                <Btn variant="contained" color="primary">
                    Terminer Campagne
                </Btn>
            </div>
            <div className='p-4 mt-3  mx-auto bg-gradient rounded rounded-4 shadow' style={{width:"80%"}}>
                <h2 className='d-block text-center text-danger'>Ajouter un participant</h2>

                <div className="mb-3 w-75 mx-auto input-container" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <div className="input-container">
                        <TextField
                        
                            label="Nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            className="mb-3"
                            sx={{ width: '48%', marginRight: '4%', marginBottom: '20px' }}
                        />
                        <TextField
                            label="Prénom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            className="mb-3"
                            sx={{ width: '48%', marginBottom: '20px' }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <TextField
                                label="CIN"
                                name="CIN"
                                value={formData.CIN}
                                onChange={handleChange}
                                variant="outlined"
                                className="mb-3"
                                sx={{ width: '40%' }}
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
                            sx={{ width: '48%', marginRight: '4%' }}
                        />
                        <TextField
                            label="Age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            className="mb-3"
                            sx={{ width: '48%' }}
                        />
                        <FormControl component="fieldset" className="mb-3" sx={{ width: '100%' }}>
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
                                    control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                    label="Homme"
                                    sx={{ marginRight: '10px' }}
                                />
                                <FormControlLabel
                                    value="femme"
                                    control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                    label="Femme"
                                />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className="mb-3" sx={{ width: '100%' }}>
                            <FormLabel component="legend">Groupe Sanguin</FormLabel>
                            <FormGroup>
                                <RadioGroup
                                    aria-label="bloodType"
                                    name="bloodType"
                                    value={formData.bloodType}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="A+"
                                        name="bloodType"
                                        value="A+"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="A-"
                                        name="bloodType"
                                        value="A-"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="B+"
                                        name="bloodType"
                                        value="B+"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="B-"
                                        name="bloodType"
                                        value="B-"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="O-"
                                        name="bloodType"
                                        value="O-"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="O+"
                                        name="bloodType"
                                        value="O+"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="AB-"
                                        name="bloodType"
                                        value="AB-"
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={<Radio size="small" sx={{ color: '#ff0000' }} />}
                                        label="AB+"
                                        name="bloodType"
                                        value="AB+"
                                        onChange={handleChange}
                                    />
                                </RadioGroup>
                            </FormGroup>
                        </FormControl>
                        <TextField
                            label="Adresse"
                            name="addresse"
                            value={formData.addresse}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            className="mb-3"

                        />

                    </div>
                </div>

                <Btn variant="contained" color='primary' onClick={handleClick} fullWidth>
                    Ajouter
                </Btn>
                {isLoading && <div className='loading'> <HashLoader color="#FF0000" /></div> }
            </div>
        </div>
    );
}