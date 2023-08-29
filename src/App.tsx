import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search/Search';
import Album from './components/Album/album';
import Favorites from './components/Favorites/favorites';
import Layout from './components/Layout/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Route>
    </Routes>
  );
}

export default App;
