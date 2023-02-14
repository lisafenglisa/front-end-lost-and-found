import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages";
import Category from "./pages/category";
import Browse from "./pages/browse";
import About from "./pages/about";
import Pets from "./pages/categories/pets";
import Books from "./pages/categories/books";
import Bags from "./pages/categories/bags";
import Clothes from "./pages/categories/clothes";
import Cards from "./pages/categories/cards";
import Money from "./pages/categories/money";
import Documents from "./pages/categories/docs";
import Electronics from "./pages/categories/elecs";
import Glasses from "./pages/categories/glasses";
import Tools from "./pages/categories/tools";
import Jewelry from "./pages/categories/jewelry";
import Keys from "./pages/categories/keys";
import Music from "./pages/categories/music";
import Sports from "./pages/categories/sports";
import Toys from "./pages/categories/toys";
import Wallets from "./pages/categories/wallets";
import Others from "./pages/categories/others";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Lost&Found</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categories/pets" element={<Pets />} />
        <Route path="/categories/books" element={<Books />} />
        <Route path="/categories/bags" element={<Bags />} />
        <Route path="/categories/clothes" element={<Clothes />} />
        <Route path="/categories/cards" element={<Cards />} />
        <Route path="/categories/money" element={<Money />} />
        <Route path="/categories/docs" element={<Documents />} />
        <Route path="/categories/elecs" element={<Electronics />} />
        <Route path="/categories/glasses" element={<Glasses />} />
        <Route path="/categories/tools" element={<Tools />} />
        <Route path="/categories/jewelry" element={<Jewelry />} />
        <Route path="/categories/keys" element={<Keys />} />
        <Route path="/categories/music" element={<Music />} />
        <Route path="/categories/sports" element={<Sports />} />
        <Route path="/categories/toys" element={<Toys />} />
        <Route path="/categories/wallets" element={<Wallets />} />
        <Route path="/categories/others" element={<Others />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
