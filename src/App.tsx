import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Form from 'pages/FormPage';
import PostPage from 'pages/PostPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import UserContextProvider from 'contexts/UserContextProvider';
import MyPage from 'pages/MyPage';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
