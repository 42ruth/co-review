import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Form from 'pages/FormPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PostPage from 'pages/PostPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
