import React, {useState} from "react";
import "./Checkout.css";
import {Redirect} from "react-router-dom";
//cartItems[index].id,
//cartItems[index].naziv,
//cartItems[index].kolicina,
//cartItems[index].slika,
//cartItems.cijena
export  default function Checkout({setCartItems, cartItems}) {
  const [value, setValue] = useState(0); // rerender
  function getIndex1(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
  }
  const SmanjiKolicinu = (e) => {
    if(e.kolicina===1){
      const newList = cartItems.filter((item) => item.id !== e.id);
    setCartItems(newList);
    }else{
      let kopija1 = cartItems; //   kopiranje niza objekata iz korpice u novi
      var index1 = getIndex1(e.id, kopija1, "id");
      kopija1[index1].kolicina -= 1; //   izmjena kolicine pod tim id-om objekta
      setCartItems(kopija1); //   update korpice izmjenjenim nizom objekata
      
    }
    
    setValue(value + 1); //rerender
  };
  const PovecajKolicinu = (e) => {
    let kopija1 = cartItems; //   kopiranje niza objekata iz korpice u novi
    var index1 = getIndex1(e.id, kopija1, "id");
    kopija1[index1].kolicina += 1; //   izmjena kolicine pod tim id-om objekta
    setCartItems(kopija1); //   update korpice izmjenjenim nizom objekata
    
    setValue(value + 1); //rerender
    console.log(cartItems.length);
  };

  return (
<>
    {cartItems.length?console.log("Postoje itemi u korpici"):<Redirect to="/" />
}
    <div className="backgroundDiv">
      <div className="topMargin"></div>
      <div classNamep="scrollDiv">
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
                  <div className="smanjiKolicinu" value={item}
                      onClick={(e) => {
                        SmanjiKolicinu(item);
                      }}>
                    <div
                      className="smanjiKolicinuCenter"
                      
                    >
                      -
                    </div>
                  </div>
                  <div className="prikazivanjeKolicineDiv">
                    <div className="smanjiKolicinuCenter">{item.kolicina}</div>
                  </div>
                  <div className="smanjiKolicinu" value={item}
                      onClick={(e) => {
                        PovecajKolicinu(item);
                      }}>
                    <div className="smanjiKolicinuCenter" 
                    >+</div>
                  </div>
                </div>
              </div>
              <div className="cijenaDiv">PRICE<br/>{item.cijena} $<br/><br/><br/>TOTAL<br/>{(Math.round((item.kolicina * item.cijena) * 100) / 100).toFixed(2)}$</div>
            </div>
          </>
        );
      })}</div>
      <div className="dugmeCheckout"> <p className="centiranjeTeksta">PAY</p></div>
    </div>
  </>);
}
