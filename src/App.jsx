import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Shopping-cart/" element={<Home />} exact />
        <Route path="/cart" element={ <Cart /> } exact/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
