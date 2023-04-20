import React, { Component } from 'react';
import './App.css';
import FilmList from "./FilmList"
import Details from "./Details"
import TMDB from "./TMDB"

export default class App extends Component {
  render() {
    const films = TMDB.films
    return (
        <div className="film-library">
          <FilmList 
            films={films}
          />,
          <Details 
            films={films}
          />
        </div>
    );
  }
}

