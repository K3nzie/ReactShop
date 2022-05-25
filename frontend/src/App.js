import React from 'react';
//import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Shipping from './screens/Shipping';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
          <main className="py-3">
            <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/cart/:slug" element={<Cart />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
              </Container>
          </main>
        <Footer />
      </Router>

    </div>
  )
};

export default App;
