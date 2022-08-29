import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header';
import MainPage from 'pages/MainPage';
import Form from 'pages/FormPage';
import PostPage from 'pages/PostPage';
import MyPagePage from 'pages/MyPagePage';
import Footer from 'components/Footer';
import UserContextProvider from 'contexts/UserContextProvider';
import Auth from 'components/Auth/Auth';
import ProtectedRoute from 'routes/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoute redirectPath="/" />}>
            <Route path="/form" element={<Form />} />
            <Route path="/mypage" element={<MyPagePage />} />
          </Route>
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/connect/github/redirect" element={<Auth />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
