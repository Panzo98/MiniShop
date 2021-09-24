import React from "react";
import "./Checkout.css";
//cartItems[index].id,
//cartItems[index].naziv,
//cartItems[index].kolicina,
//cartItems[index].slika,
//cartItems.cijena
export default function Checkout({ cartItems, setCartItems }) {
  function getIndex1(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
  }
  const smanjiKolicinu = (e) => {
    let kopija1 = cartItems; //   kopiranje niza objekata iz korpice u novi
    var index1 = getIndex1(e.id, kopija1, "id");
    kopija1[index1].kolicina -= 1; //   izmjena kolicine pod tim id-om objekta
    setCartItems(kopija1); //   update korpice izmjenjenim nizom objekata
  };

  return (
    <div className="backgroundDiv">
      <div className="topMargin"></div>
      {cartItems.map((item) => {
        return (
          <>
            <div className="itemCard">
              <div className="itmSlik">
                <img src={item.slika} className="itemSlika"></img>
              </div>

              <div style={{ maxWidth: "410px", minWidth: "410px" }}>
                <div className="nazivCheckout">
                  {
                    //tem.naziv.length > 60
                    // ? item.naziv.slice(0, 60) + "..."
                    //: item.naziv}
                  }
                  {item.naziv}
                </div>
              </div>
              <div className="kolicinaDiv">
                <div className="inputKolicinaDiv">
                  <div className="smanjiKolicinu">
                    <div
                      className="smanjiKolicinuCenter"
                      value={item}
                      onClick={(e) => {
                        smanjiKolicinu(item);
                      }}
                    >
                      -
                    </div>
                  </div>
                  <div className="prikazivanjeKolicineDiv">
                    <div className="smanjiKolicinuCenter">{item.kolicina}</div>
                  </div>
                  <div className="smanjiKolicinu">
                    <div className="smanjiKolicinuCenter">+</div>
                  </div>
                </div>
              </div>
              <div className="cijenaDiv">{item.cijena}</div>
            </div>
          </>
        );
      })}
    </div>
  );
}
