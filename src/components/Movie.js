import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";


function Movie({id, year, title, summary, poster,genres}){
    return (
        <Link
            to={{
                pathname:`movie/${id}`,
                state:{
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
            <div className="movie">
                    <img src={poster} alt={title} title={title}/>
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{year}</h5>
                        <ul className="genres">{genres.map((genre,index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                            ))}
                        </ul>
                        <p className="movie__summary">{summary.slice(0,180)}...</p>
                        
                    </div>
            </div>
        </Link>
            )
}

Movie.propTypes = {//왜 p로 하면 잘되고 P로 하면 오류나는지 ?
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;







