import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    CircularProgress,
} from '@mui/material';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const book = { title, author, publishYear };
        fetch('http://localhost:8000/books/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        })
            .then(() => {
                console.log('New book added');
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error adding book:', error);
                setLoading(false);
            });
    };

    return (
        <Container
            style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    left: '10px',
                    top: '10px',
                    zIndex: '1',
                }}
            >
                <BackButton
                    style={{
                        borderRadius: '50%',
                        padding: '8px',
                        background: '#007bff',
                        color: 'white',
                        fontSize: '24px',
                        lineHeight: '1',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                />
            </div>
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                style={{ marginTop: '10px', marginBottom: '16px' }}
            >
                Add a New Book
            </Typography>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '400px',
                    width: '100%',
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Book Name"
                    variant="outlined"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ marginBottom: '16px' }}
                />
                <TextField
                    label="Author"
                    variant="outlined"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{ marginBottom: '16px' }}
                />
                <TextField
                    label="Publish Year"
                    variant="outlined"
                    required
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    style={{ marginBottom: '16px' }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '16px',
                    }}
                >
                    {loading ? (
                        <CircularProgress size={24} />
                    ) : (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginRight: '8px' }}
                        >
                            Add Book
                        </Button>
                    )}
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default CreateBooks;
