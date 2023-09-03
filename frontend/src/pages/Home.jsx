import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { Typography } from '@mui/material'

const Home = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/books/getBooks')
            .then(res => res.json())
            .then((response) => {
                setBooks(response.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div className="container">
                <Typography variant="h4" component="h4" align="center" gutterBottom>Book List</Typography>
                <Link to="/books/create" className="btn btn-primary mb-3"><MdOutlineAddBox /> Add Book</Link>
            </div>
            {
                loading ? (
                    <Spinner />
                ) :
                    (
                        <div className="container">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Publish Year</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books.map((book, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{book.book_name}</td>
                                                <td>{book.author}</td>
                                                <td>{book.publish_year}</td>
                                                <td>
                                                    <Link to={`/books/details/${book.id}`} className="btn btn-primary btn-sm"><BsInfoCircle /></Link>
                                                    <Link to={`/books/edit/${book.id}`} className="btn btn-warning btn-sm"><AiOutlineEdit /></Link>
                                                    <Link to={`/books/delete/${book.id}`} className="btn btn-danger btn-sm"><AiOutlineDelete /></Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
            }

        </div>
    )
}

export default Home