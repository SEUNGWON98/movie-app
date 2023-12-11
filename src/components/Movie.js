import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Movie.css";

function Movie({ id, imgsrc, poster_path, title, overview }) {
  return (
    <div className="movieBox">
      <img className="movieImg" src={`${imgsrc}${poster_path}`} alt="" />
      <div>
        <h2 className="movieTitle">
          <Link to={`/movie/${id}`} key={id}>
            {title}
            {/* <Movie
              id={id}
            /> */}
          </Link>
        </h2>
        <p>
          {overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  imgsrc: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
