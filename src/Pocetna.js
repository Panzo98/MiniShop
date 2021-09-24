import React, { useState } from "react";
import Podaci from "./Podaci";
import Header from "./Header";

export default function Pocetna({
  cartItems,
  setCartItems,
  cartIco,
  setCartNum,
}) {
  function getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
  }
  console.log(cartItems.length);
  const gotivnaFunkcija = (e) => {
    if (cartItems.some((element, i) => element.id === e.id)) {
      //ako artikal vec postoji u korpici
      let kopija = cartItems; //   kopiranje niza objekata iz korpice u novi
      var index = getIndex(e.id, kopija, "id");
      kopija[index].kolicina += 1; //   izmjena kolicine pod tim id-om objekta
      setCartItems(kopija); //   update korpice izmjenjenim nizom objekata
      setCartNum(cartIco + 1); //povecavanje broja koji prikazuje koliko je artikala u korpici
      console.log(
        cartItems[index].id,
        cartItems[index].naziv,
        cartItems[index].kolicina,
        cartItems[index].slika,
      );
    } else {
      //ako artikal ne postoji u korpici
      const obj = {
        id: e.id,
        naziv: e.title,
        slika: e.image,
        kolicina: 1,
        cijena: e.price,
      }; //prvo dodavanje artikla po tom IDu
      //console.log(obj.id, obj.kolicina);
      setCartItems([...cartItems, obj]); //dodavanje novog objekta u korpicu
      setCartNum(cartIco + 1); //povecavanje broja koji prikazuje koliko je artikala u korpici
    }
  };

  return (
    <>
      <Podaci gotivnaFunkcija={gotivnaFunkcija} />
    </>
  );
}
