import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Paperclip } from 'lucide-react';
import { supabase } from './lib/supabase';
import HomePage from './pages/HomePage';
import MercatorGallery from './pages/MercatorGallery';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mercator-gallery" element={<MercatorGallery />} />
      </Routes>
    </div>
  );
}

export default App;