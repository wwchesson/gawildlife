import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { HomeStyle } from "./StyleElements";

function Home({animals}) {
  const [homePhoto, setHomePhoto] = useState([]);

  useEffect(() => {
    fetch(`/animals/${1}`)
      .then((r) => r.json())
      .then((photo) => {
        setHomePhoto(photo.image);
        console.log(homePhoto)
      });
  }, []);

  // const photoToDisplay = homePhoto.map((photo) => (
  //   <img className="deer" key={photo.id} src={photo.image} alt="home"></img>
  // ));

  return (
    <HomeStyle>
      <h1 className="wildlife">Georgia Wildlife</h1>
      <img className ="deer" src={homePhoto}></img>
      <h3 className="intro">
        Learn about naturally occuring wildlife in the state of Georgia.
      </h3>
    </HomeStyle>
  );
}

export default Home;
