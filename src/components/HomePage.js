import React from "react";

import "./HomePage.css";

import { useState, useEffect } from "react";
import axios from "axios";

const diziListesi = {
  total: "24051",
  page: 1,
  pages: 1203,
  tv_shows: [
    {
      id: 35624,
      name: "The Flash",
      permalink: "the-flash",
      start_date: "2014-10-07",
      end_date: null,
      country: "US",
      network: "The CW",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg",
    },
    {
      id: 23455,
      name: "Game of Thrones",
      permalink: "game-of-thrones",
      start_date: "2011-04-17",
      end_date: null,
      country: "US",
      network: "HBO",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg",
    },
    {
      id: 29560,
      name: "Arrow",
      permalink: "arrow",
      start_date: "2012-10-10",
      end_date: null,
      country: "US",
      network: "The CW",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/29560.jpg",
    },
    {
      id: 43467,
      name: "Lucifer",
      permalink: "lucifer",
      start_date: "2016-01-25",
      end_date: null,
      country: "US",
      network: "Netflix",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/43467.com",
    },
    {
      id: 43234,
      name: "Supergirl",
      permalink: "supergirl",
      start_date: "2015-10-26",
      end_date: null,
      country: "US",
      network: "The CW",
      status: "Ended",
      image_thumbnail_path:
        "https://static.episodate.com/images/tv-show/thumbnail/43234.jpg",
    },
  ],
};

const HomePage = () => {
  // console.log(props);
  const [diziler, setDiziler] = useState([]);
  const [sayfa, setSayfa] = useState(1);
  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then(function (response) {
        // handle success
        console.log(response.data.tv_shows);
        console.log("axios içi");
        setDiziler(response.data.tv_shows);
      })
      .catch(function (error) {
        // handle error
        console.log("err:", error);
      });
  }, []);

  function azalt() {
    if (sayfa > 1) {
      const counter = sayfa - 1;
      setSayfa(counter);
    }
  }
  function arttir() {
    const counter = sayfa + 1;
    setSayfa(counter);
  }
  return (
    <div className="container">
      <div className="column">
        {diziler.map((film, ind) => {
          console.log("map içi");
          if (sayfa - 1 <= ind && ind < sayfa * 3) {
            return (
              <section key={film.id} className="card">
                <img
                  src={film.image_thumbnail_path}
                  alt={`${film.name} poster`}
                />
                <div className="innerDetail">
                  <p>{film.name}</p>
                  <p>{film.start_date}</p>
                  <button>Preview</button>
                </div>
              </section>
            );
          }
        })}

        <footer className="footer">
          <button>dizi ekle</button>
          {/*  , counter ,  ( row yaz) */}
          <div className="footer-button">
            <div>
              <button onClick={azalt}>before button</button>
            </div>
            <div>
              <label>{sayfa}</label>
            </div>
            <div>
              <button onClick={arttir}>after button</button>
            </div>
          </div>
        </footer>
      </div>

      <div className="center">
        <p>dizi özet bilgisi</p>
        <div id="butons">
          <button> detay </button>
          <button> favla </button>
        </div>
      </div>

      <div className="column">
        <section className="card">
          <img></img>
          <div className="innerDetail">
            <p>name</p>
            <p>date</p>
            <button> Çıkar </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
