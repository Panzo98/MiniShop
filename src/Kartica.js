import React from "react";
import "./Kartica.css";

export default function Kartica(props) {
  let { title, image, price, id } = props.artikal;
  let naziv = title;
  if (naziv.length > 30) {
    naziv = naziv.slice(0, 30) + "...";
  }

  return (
    <div className="kartica">
      <p className="naslov">{naziv}</p>
      <div className="slikaContainer">
        <img src={image} className="slika" alt="slika" />
      </div>
     
      <p className="naslov1">PRICE</p>
      <p className="naslov">{(Math.round((price) * 100) / 100).toFixed(2)}$
      </p>
      <div
        className="dugme"
        value={props.artikal}
        onClick={(e) => props.gotivnaFunkcija(props.artikal)}
      >
        ADD TO CART
      </div>
    </div>
  );
}
