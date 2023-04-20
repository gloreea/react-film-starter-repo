import React, { Component } from 'react';
import Poster from "./Poster"
import Fave from "./Fave"

export default class FilmRow extends Component {
    handleDetailsClick = film => {
        console.log(`fetching deatils for ${film.title}`)
    }
    render () {
        const {film} = this.props
        const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
        const year = new Date (film.release_date).getFullYear()
            return (
                <div className="film-row" onClick={()=> this.handleDetailsClick(this.props.film)}>
                        <Poster 
                            url={posterUrl} 
                            alt={`"${film.title}" released on ${year}`}
                        />
                        <div className="file-summary">
                            <h1>{film.title}</h1>
                            <h2>{year}</h2>
                        </div>
                        <Fave />
                    </div>
            )   
    }             
}
