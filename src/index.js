import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/scss/style.scss';
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Carts from './pages/cart/Carts';
import Search from './pages/search/Search';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile'
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />} ></Route>
          <Route path='home' element={<Home />} ></Route>
          <Route path='detail' element={<Detail />} ></Route>
          <Route path='carts' element={<Carts />} ></Route>
          <Route path='search' element={<Search />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='register' element={<Register />} ></Route>
          <Route path='profile' element={<Profile />} ></Route>
          <Route path='*' element={<Navigate to='/' />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

