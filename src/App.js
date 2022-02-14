import React, { useState, useEffect } from "react";
export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() =>{
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician')
    .then(res=>res.json())
    .then(
      (resultado) =>{
        setImages(resultado.data)
      }
    )
  }, []);
  return (
    <ul>
      {console.log(images[0])}
    </ul>
  );
}

