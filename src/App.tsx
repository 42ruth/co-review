import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Form from 'pages/FormPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import UserContextProvider from 'contexts/UserContextProvider';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
