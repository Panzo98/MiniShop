import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Korpica from "./Korpica";
import { BrowserRouter as Router, Link, Route , Redirect} from "react-router-dom";
import "./Header.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 1px",
  },
}))(Badge);

export default function Header({ cartItems, setCartItems }) {
  const [otvorena, setOtvorena] = useState(false);
  //console.log(cartItems);
  return (
    <div className="header">
      <div className="homeLabel" onClick={event =>  window.location.href='/'}>MiniShop</div>
      {otvorena ? (
        <Korpica
          cartItems={cartItems}
          setCartItems={setCartItems}
          setOtvorena={setOtvorena}
          otvorena={otvorena}
        ></Korpica>
      ) : null}
      <div className="ikonica">
        <IconButton
          aria-label="cart"
          onClick={() => {
            setOtvorena(!otvorena);
          }}
        >
          <StyledBadge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
}
