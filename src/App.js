import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Gallery = lazy(() => import('./components/Gallery'));
const Favorites = lazy(() => import('./components/Favorites'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;