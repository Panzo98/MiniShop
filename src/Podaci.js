import React, { useEffect, useState } from "react";
import axios from "axios";
import Prikazivanje from "./Prikazivanje";
import { makeStyles } from "@material-ui/core/styles";
import "./Podaci.css"
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: "45%",
    },
  },
}));

export default function Podaci({ gotivnaFunkcija }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setData(await axios.get("https://fakestoreapi.com/products/"));
      setLoading(false);
    } catch {
      alert("Connection error!");
    }
  };
  useEffect(() => {
    fetchData();
    return () => {
      setData([]);
      setLoading(true);
    };
  }, []);

  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress className="ucitavanjeAnimacija" color="secondary" />
      </div>
    );
  } else {
    return (
      <Prikazivanje
        podaci={data}
        gotivnaFunkcija={gotivnaFunkcija}
      ></Prikazivanje>
    );
  }
}
