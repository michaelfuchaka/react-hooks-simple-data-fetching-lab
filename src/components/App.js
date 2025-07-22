// create your App component here

import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  if (!imageUrl) {
    return <p>Loading...</p>;
  }

  return <img src={imageUrl} alt="A Random Dog" />;
}

export default App;
