//Imports
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import fire from "./components/fire";
//import Hero from "./components/hero";
import LoginSignup from "./LoginSignup";
import Main from "./components/main";
import Basket from "./components/basket";
import data from "./components/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";

const App = () => {
  // for stripe setup

  //CART
  //pass product to main component
  const { products } = data;
  //hook for cart use cart items in basket
  const [cartItems, setCartItems] = useState([]); //cart items is empty []
  //function to add to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id); // if the two .ids match
    //find product in cart items and update value
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, qty: exist.qty + 1 } //upate quantity by 1 if true
            : x
        )
      );
    } else {
      //if product doesnt exist in the cart, add one
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //remove product from cartitems, using filter method to remove
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        ); //update by -1
      }
    }
  };

  //firebase
  //each component has two states for login with firebase
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  //firebase clear input, errors
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    fire //authorise email and password
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleSignup = () => {
    clearErrors();

    fire //authorise email and password for signup
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/user-disabled":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  //firebase listener
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser(" ");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  //for products
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <LoginSignup
        email={email}
        setEmail={setEmail}
        passsword={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />

      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          countCartItems={cartItems.length}
        ></Basket>
      </div>

      <Router></Router>
    </div>
  );
};
export default App;
