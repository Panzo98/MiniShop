import Pocetna from "./Pocetna";
import Checkout from "./Checkout";
import Header from "./Header";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cartIco, setCartNum] = useState(0); //prikaz broja artikala u korpici
  const [cartItems, setCartItems] = useState([]); //artikli u korpici
  return (
    <Router>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Switch>
        <Route exact path="/">
          <Pocetna
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartIco={cartIco}
            setCartNum={setCartNum}
          ></Pocetna>
        </Route>
        <Route path="/checkout">
          <Checkout
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></Checkout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
