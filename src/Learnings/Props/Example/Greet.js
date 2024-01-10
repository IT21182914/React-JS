import React from "react";

function Greet(props) {
  return (
    <h1>
      Helloo {props.name} You are a {props.hero}
      {props.children}
    </h1>
  );
}

export default Greet;
