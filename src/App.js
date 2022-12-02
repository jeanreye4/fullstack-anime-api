import "./App.css";
import { useState, useEffect } from "react";
import { getAnimes } from "./services/anime.js";

function Anime() {
  const [animes, setAnimes] = useState([]);
  const [names, setNames] = useState([]);
  const [selected, setSelected] = useState({});

  const changeStyle = (e) => {
    let list = animes.filter((anime) => {
      return anime.character === e.target.name;
    });

    setSelected(list[Math.floor(Math.random() * list.length)]);
  };

  const fetchAnimes = async () => {
    const data = await getAnimes();
    setAnimes(data);

    let namelist = {};
    data.forEach((char) => {
      namelist[char.character] = (namelist[char.character] || 0) + 1;
    });

    setNames(Object.keys(namelist));
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  return (
    <>
      <h1>Anime Quote API</h1>
      <div className="anime-container">
        <div className="all-quotes">
          {names.map((name) => (
            <div className="btn-container" key={name}>
              <button name={name} onClick={changeStyle}>
                {name}
              </button>
            </div>
          ))}
        </div>
        <div className="char-card">
          <h2>{selected.character}</h2>
          <img src={selected.img} alt={selected.character} />
          <p>{selected.quote}</p>
        </div>
      </div>
    </>
  );
}

export default Anime;
