import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Form from 'pages/FormPage';
import PostPage from 'pages/PostPage';
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
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
