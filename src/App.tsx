import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainPage from 'pages/MainPage';
import Form from 'pages/FormPage';
import PostPage from 'pages/PostPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import UserContextProvider from 'contexts/UserContextProvider';
import MyPage from 'pages/MyPage';
import Auth from 'components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/connect/github/redirect" element={<Auth />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
