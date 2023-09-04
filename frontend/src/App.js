
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBooks from './pages/EditBooks';
import ShowBooks from './pages/ShowBooks';
import DeleteBooks from './pages/DeleteBooks';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="books/create" element={<CreateBooks />} />
      <Route path="books/details/:id" element={<ShowBooks />} /> {/* ShowBooks is used for both "details" and "show" */}
      <Route path="books/edit/:id" element={<EditBooks />} />
      <Route path="books/show/:id" element={<ShowBooks />} />
      <Route path="books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
}

export default App;
