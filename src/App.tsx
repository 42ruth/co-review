import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages/Main';
import { Form } from 'pages/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
