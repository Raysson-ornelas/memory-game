import React, { useState } from "react";
export default function App() {
  const backHigh ='https://storage.googleapis.com/ygoprodeck.com/pics/back_high.jpg';
  const [countClicks, setCountClicks] = useState(0);
  const [images, setImages] = useState([
    {id: 1, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg', name:'dragon', enable: false, foundPair: false},
    {id: 2, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg', name: 'magicCard', enable: false, foundPair: false},
    {id: 3, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg', name: 'darkMagician', enable: false, foundPair: false},
    {id: 4, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/27551.jpg', name: 'trapCard', enable: false, foundPair: false},
    {id: 5, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/54507222.jpg', name: 'insect', enable: false, foundPair: false},
    {id: 6, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/30829071.jpg', name: 'beast', enable: false, foundPair: false},

    {id: 7, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg', name: 'dragon', enable: false, foundPair: false},
    {id: 8, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg', name: 'magicCard', enable: false, foundPair: false},
    {id: 9, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg', name: 'darkMagician', enable: false, foundPair: false},
    {id: 10, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/27551.jpg', name: 'trapCard', enable: false, foundPair: false},
    {id: 11, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/54507222.jpg', name: 'insect', enable: false, foundPair: false},
    {id: 12, imgUrl: 'https://storage.googleapis.com/ygoprodeck.com/pics/30829071.jpg', name: 'beast', enable: false, foundPair: false}
  ]);

  function handleEnableCard (id){
    const newImages = images.map(img => {
      return img.id === id ? { ...img, enable: !img.enable} : img
    })
    setCountClicks(countClicks + 1);
    setImages(newImages);
  }

  return (
    <div>
      {console.log(countClicks)}
      {images.map(img => (
        <img key={img.id} src={img.enable ? img.imgUrl : backHigh} height='400px' onClick={() => handleEnableCard(img.id)} />
      ))}
    </div>
  );
}

