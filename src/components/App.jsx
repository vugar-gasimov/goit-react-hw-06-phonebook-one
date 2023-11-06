import React from 'react';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Header } from './Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'Pages/NotFound';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PhoneBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
