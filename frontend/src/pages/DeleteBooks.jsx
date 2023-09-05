import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from '@mui/material';

const DeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setOpenModal(true); // Open the modal when the component is mounted
    }, []);

    const handleDeleteBook = () => {
        setLoading(true);
        fetch(`http://localhost:8000/books/deleteBook/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                console.log('Book deleted');
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
                setLoading(false);
            });
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <BackButton />

            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-dialog-description">
                        Are you sure you want to delete this book?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseModal}
                        color="primary"
                        disabled={loading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            handleDeleteBook();
                            handleCloseModal();
                        }}
                        color="secondary"
                        disabled={loading}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteBooks;
