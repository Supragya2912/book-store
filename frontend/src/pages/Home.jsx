import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { Typography } from '@mui/material';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
} from '@mui/material';
import { green } from '@mui/material/colors';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8000/books/getBooks')
            .then((res) => res.json())
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className="container" style={{ margin: 30 }}>
                <Typography variant="h4" component="h4" align="center">
                    Book List
                </Typography>
                <Button variant="contained" style={{ backgroundColor: "#4caf50" }}>
                    <Link to="/books/create" className="btn btn-primary mb-3" style={{ textDecoration: "none", color: "black" }}>
                        <MdOutlineAddBox style={{ marginTop: 5 }} /> Add Book
                    </Link>
                </Button>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <div className="container" style={{ margin: 30 }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: "bold" }}>No</TableCell>
                                    <TableCell style={{ fontWeight: "bold" }}>Book Name</TableCell>
                                    <TableCell style={{ fontWeight: "bold" }}>Author</TableCell>
                                    <TableCell style={{ fontWeight: "bold" }}>Publish Year</TableCell>
                                    <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books.map((book, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{book.title}</TableCell>
                                        <TableCell>{book.author}</TableCell>
                                        <TableCell>{book.publishYear}</TableCell>
                                        <TableCell>
                                            <Link
                                                to={`/books/details/${book._id}`}
                                                className="btn btn-primary btn-sm"
                                                style={{ color: 'black', marginRight: '8px' }}
                                            >
                                                <BsInfoCircle />
                                            </Link>
                                            <Link
                                                to={`/books/edit/${book._id}`}
                                                className="btn btn-warning btn-sm"
                                                style={{ color: 'blue', marginRight: '8px' }}
                                            >
                                                <AiOutlineEdit />
                                            </Link>
                                            <Link
                                                to={`/books/delete/${book._id}`}
                                                className="btn btn-danger btn-sm"
                                                style={{ color: 'red', marginRight: '8px' }}
                                            >
                                                <AiOutlineDelete />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    );
};

export default Home;
