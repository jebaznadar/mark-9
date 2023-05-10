import React from "react";
import "./styles.css";
import { useState } from "react";
const songDB = {
  RnB: [
    { song: "Chris Brown - Fine China", rating: "5/10" },
    { song: "Theweeknd - Call Out My Name ", rating: "5/10" },
    { song: "Michael Jackson - Hold My Hand", rating: "7/10" }
  ],
  HIPHOP: [
    { song: "Travis Scott - Highest In The Room ", rating: "9/10" },
    { song: "Kanye West - Good Morning", rating: "8/10" },
    { song: "Don Toliver - No Idea ", rating: "6.5/10" }
  ],
  INDIAN: [
    { song: "Mohammed Irfan,Saim Bhat - Phir mohabbat", rating: "9/10" },
    { song: "Monali Thakur - Sawar Loon  ", rating: "10/10" },
    { song: "Falak Shabir - Mera Mann Kehne Laga", rating: "9.5/10" }
  ]
};

export default function App() {
  const [selectedgenre, setgenre] = useState("RnB");
  function genreClickHandler(genre) {
    setgenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ color: "" }}>🎧 MUSICS 🎧</h1>
      <div>Checkout my favorite songs. Select a genre to get started </div>
      <div>
        {Object.keys(songDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedgenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem ",
                border: "1px solid #D1D5DB ",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                margin: "2rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{song.song}</div>
              <div style={{ fontSize: "smaller" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
