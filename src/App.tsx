import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header';
import MainPage from 'pages/MainPage';
import Editor from 'pages/EditorPage';
import PostPage from 'pages/PostPage';
import MyPagePage from 'pages/MyPagePage';
import Footer from 'components/Footer';
import UserContextProvider from 'contexts/UserContextProvider';
import Auth from 'components/Auth/Auth';
import ProtectedRoute from 'routes/ProtectedRoute';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoute redirectPath="/login" />}>
            <Route path="/editor" element={<Editor />} />
            <Route path="/mypage" element={<MyPagePage />} />
            <Route path="/posts/:id" element={<PostPage />} />
          </Route>
          <Route element={<ProtectedRoute isReverse redirectPath="/" />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/connect/github/redirect" element={<Auth />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
