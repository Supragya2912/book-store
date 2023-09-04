import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/' }) => {
    return (
        <div>
            <Link to={destination} className="btn btn-primary mb-3" style={{ textDecoration: "none", color: "black" }}>
                <BsArrowLeft style={{ marginTop: 5 }} /> Back
            </Link>
        </div>
    )
}

export default BackButton