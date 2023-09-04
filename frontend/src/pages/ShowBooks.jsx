import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { Typography } from '@mui/material'

const ShowBooks = () => {

    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/books/getBook/${id}`)
            .then((res) => res.json())
            .then((response) => {
                setBook(response);
                setLoading(false);
                console.log(response);
            })
            .catch((err) => console.log(err));
    }, [id]);

    console.log(book);
    return (

        <div className="container" style={{ margin: 30 }}>
            <BackButton />
            <Typography>Book Details</Typography>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="container" style={{ margin: 30 }}>
                            <div>
                                <label style={{ fontWeight: "bold" }}>Book Name: </label>
                                <span>{book.title}</span>
                            </div>
                        </div>
                        <div className="container" style={{ margin: 30 }}>
                            <div>
                                <label style={{ fontWeight: "bold" }}>Title: </label>
                                <span>{book.author}</span>
                            </div>
                        </div>
                        <div className="container" style={{ margin: 30 }}>
                            <div>
                                <label style={{ fontWeight: "bold" }}>Author: </label>
                                <span>{book.createAt}</span>
                            </div>
                        </div>
                        <div className="container" style={{ margin: 30 }}>
                            <div>
                                <label style={{ fontWeight: "bold" }}>Publish Year: </label>
                                <span>{book.publishYear}</span>
                            </div>
                        </div>
                        <div className="container" style={{ margin: 30 }}>
                            <div>
                                <label style={{ fontWeight: "bold" }}>Create Time </label>
                                <span>{new Date(book.createdAt).toString()}</span>
                            </div>
                        </div>
                        <div className="container" style={{ margin: 30 }}>
                            <div>
                                <label style={{ fontWeight: "bold" }}>Update Time </label>
                                <span>{new Date(book.updatedAt).toString()}</span>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ShowBooks