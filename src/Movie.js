import React from "react";
import PropTypes from "prop-types";


function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>;
}

Movie.propTypes = {//왜 p로 하면 잘되고 P로 하면 오류나는지 ?
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}

export default Movie;







