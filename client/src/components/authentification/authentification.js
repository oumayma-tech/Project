import React, { Component } from "react";

import Register from "./register";
export default class authentification extends Component {
  jQuerycode = () => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  };

  componentDidMount() {
    this.jQuerycode();
  }
  render() {
    return <Register />;
  }
}
