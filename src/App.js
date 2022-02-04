import React from "react";
import { makeStyles } from "@material-ui/core";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Login from "./components/login/Login"
import Register from "./components/register/Register"

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>  
          <Route path="/coins/:id" element={<CoinPage />} exact />
          <Route path="/login" element={<Login />} exact/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;