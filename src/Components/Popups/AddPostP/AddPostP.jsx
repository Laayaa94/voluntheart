import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './AddPostP.css'; // Import the external CSS file
import profile from '../../../assets/profile.jpg'
import { PhotoAlbum } from '@mui/icons-material';

const AddPostP = ({ open, onClose }) => {
    return (
        <> 
        <div className="boxContainer">
        <Dialog open={open} onClose={onClose} aria-labelledby='dialog-id' aria-describedby='dialog-content'>
                <DialogTitle id='dialog-id'>Create Post</DialogTitle>
                <hr className='separator' />
                <DialogContent>
                    <div className='profileboxContainer'>
                        <div className="UserImage">
                        <img src={profile} alt='Profile' className='profileImage' />
                        <h4>Denil Decker</h4>
                        </div>
                        <textarea className='MindArea' cols="" rows="10" placeholder='Whats on your mind Prabodha?'></textarea>
                       
                    </div>
                   
                    <DialogContentText id='dialog-content'>

                        <textarea className='contentArea' placeholder='Add Posts/Videos' startIcon={PhotoAlbum} />
                    </DialogContentText>
                    <Button variant='contained' color='primary' startIcon={<LocationOnIcon />}>Add to Your Post</Button>

                    <DialogActions>
                        <div style={{ flexGrow: 1 }}></div> {/* Add space between buttons */}
                        <Button onClick={onClose} className='canslebtn'>Cancel</Button>
                        <Button variant='contained' color='primary'>Post</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
            
        </>
    );
};

export default AddPostP;
