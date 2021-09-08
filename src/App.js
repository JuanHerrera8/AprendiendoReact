import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function (){
    getGifs({keyWord: 'morty'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif) => (<img src={singleGif} />))
        }
      </section>
    </div>
  );
}

export default App;
