import React, { useState } from "react";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import "./Korpica.css";

export default function Korpica({
  cartItems,
  setCartItems,
  setOtvorena,
  otvorena,
}) {
  return (
    <>
      <div className="korpicaa">
        <div className="cartLabel">CART ITEMS</div>
        <div className="glavniDiv">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="itemuKorpici">
                <div className="prikazNazivaArtikla">
                  <img
                    src={item.slika}
                    alt="slika"
                    className="slikaArtikla"
                  ></img>
                  <div className="prikazSamo">
                    {item.naziv.length > 24
                      ? item.naziv.slice(0, 24) + "..."
                      : item.naziv}
                  </div>
                </div>

                <div className="prikazKolicineArtikla"> {item.kolicina}</div>
              </div>
            );
          })}
        </div>
        <div className="checkoutDugme" onClick={() => setOtvorena(!otvorena)}>
          <Link
            to={{
              pathname: "/checkout",

              cartItems: { cartItems },
              setCartItems: { setCartItems },
            }}
            style={{ textDecoration: "none", color: "white" }}
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </>
  );
}
