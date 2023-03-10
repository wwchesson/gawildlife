import React, { useEffect, useState } from "react";
import { HomeStyle } from "./StyleElements";
import Deer from "./Deer.jpeg"

function Home({}) {


  return (
    <HomeStyle>
      <h1 className="wildlife">Georgia Wildlife</h1>
      <img className ="deer" src={Deer}></img>
      <h3 className="intro">
        Learn about naturally occuring wildlife in the state of Georgia.
      </h3>
    </HomeStyle>
  );
}

export default Home;
