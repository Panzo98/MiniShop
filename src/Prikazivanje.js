import React from "react";
import Kartica from "./Kartica";
import "./Prikazivanje.css";

export default function Prikazivanje(props) {
  let artikli = props.podaci.data;
  return (
    <div className="grid">
      {artikli.map((artikal, id) => {
        return (
          <Kartica
            key={id}
            artikal={artikal}
            gotivnaFunkcija={props.gotivnaFunkcija}
          ></Kartica>
        );
      })}
    </div>
  );
}
