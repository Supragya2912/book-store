
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
      <Route path="/create" element={<CreateBooks />} />
      <Route path="/edit/:id" element={<EditBooks />} />
      <Route path="/show/:id" element={<ShowBooks />} />
      <Route path="/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
}

export default App;
