import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Components/nav";
import Footer from "./Components/footer";

ReactDOM.render(
  <>
    <Nav> </Nav>
    <main className=" fluid-container">
      <h1> hero hero </h1>
      <Footer></Footer>
    </main>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
