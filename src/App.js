import React, { useState } from "react";
export default function App() {
  const backHigh =
    "https://storage.googleapis.com/ygoprodeck.com/pics/back_high.jpg";
  const [countClicks, setCountClicks] = useState([]);
  const [images, setImages] = useState([
    {
      id: 0,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
      name: "dragon",
      enable: false,
      foundPair: false,
    },
    {
      id: 1,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg",
      name: "magicCard",
      enable: false,
      foundPair: false,
    },
    {
      id: 2,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg",
      name: "darkMagician",
      enable: false,
      foundPair: false,
    },
    {
      id: 3,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/27551.jpg",
      name: "trapCard",
      enable: false,
      foundPair: false,
    },
    {
      id: 4,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/54507222.jpg",
      name: "insect",
      enable: false,
      foundPair: false,
    },
    {
      id: 5,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/30829071.jpg",
      name: "beast",
      enable: false,
      foundPair: false,
    },
    {
      id: 6,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
      name: "dragon",
      enable: false,
      foundPair: false,
    },
    {
      id: 7,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg",
      name: "magicCard",
      enable: false,
      foundPair: false,
    },
    {
      id: 8,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg",
      name: "darkMagician",
      enable: false,
      foundPair: false,
    },
    {
      id: 9,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/27551.jpg",
      name: "trapCard",
      enable: false,
      foundPair: false,
    },
    {
      id: 10,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/54507222.jpg",
      name: "insect",
      enable: false,
      foundPair: false,
    },
    {
      id: 11,
      imgUrl: "https://storage.googleapis.com/ygoprodeck.com/pics/30829071.jpg",
      name: "beast",
      enable: false,
      foundPair: false,
    },
  ]);

  const checkPairs = () => {
    const img1 = images[countClicks[0]];
    const img2 = images[countClicks[1]];
    if (img1.id != img2.id) {
      if (img1.name == img2.name) {
        console.log("to vivo");
      } else {
        setTimeout(() => {
          img1.enable = false;
          img2.enable = false;
        });
      }
    }
    setCountClicks([]);
  };

  function handleEnableCard(id) {
    const newImages = images.map((img) => {
      return img.id === id ? { ...img, enable: true } : img;
    });
    const newCount = [...countClicks, id];
    setCountClicks(newCount);
    setImages(newImages);
  }
  if (countClicks.length === 2) {
    checkPairs();
    setCountClicks([]);
  }

  return (
    <div>
      {images.map((img) => (
        <img
          key={img.id}
          src={img.enable ? img.imgUrl : backHigh}
          height="200px"
          onClick={() => handleEnableCard(img.id)}
        />
      ))}
    </div>
  );
}
