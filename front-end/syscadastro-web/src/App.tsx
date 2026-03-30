import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Carrinho from "./pages/Carrinho";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

import { useEffect, useState } from "react";
import Cadastro from "./pages/Cadastro";

function App() {

  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<any[]>([]);
  const [NotifCart, setNotifCart] = useState<boolean>(false)
  const [UserName, setUserName] = useState<string>('');
  function showNotif_cart() {
      setNotifCart(true)
      setTimeout(() => {
          setNotifCart(false)
      }, 3000);
  }

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={
                <Home
                username={UserName} 
                count={count} 
                setCount={setCount} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                favoriteItems={favoriteItems} 
                setFavoriteItems={setFavoriteItems} 
                NotifCart={NotifCart} 
                showNotif_cart={showNotif_cart}
                />
              }>
              </Route>

              <Route path="/login" element={
                <Login 
                setUsername={setUserName}
                />
              }>
              </Route>

              <Route path="/carrinho" element={
                <Carrinho 
                username={UserName}
                count={count} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                setCount={setCount}
                />
                }>
              </Route>

              <Route path="/favoritos" element={
                <Favoritos
                username={UserName}
                count={count} 
                favoriteItems={favoriteItems} 
                setFavoriteItems={setFavoriteItems}
                setCount={setCount} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                NotifCart={NotifCart} 
                showNotif_cart={showNotif_cart}
                />
                }>
              </Route>

              <Route path="/contato" element={
                <Contato />}>
              </Route>
              <Route path="/cadastro" element={
                <Cadastro/>}>
              </Route>   
          </Routes>
      </Router>
    </>
  )
}

export default App;