import React from "react";
import "./Header.css";
const imageSrc =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
const name = "Kitty Kat";
const birthday = "January 1";

function Header({props}) {
  console.log(props)
  return (
    <header>
      <img src={imageSrc} width="200px" alt ="kitten"/>
      <h1>{name}</h1>
      <h2> Birthday: {birthday} </h2>
    </header>
      )
}

export default Header;
