import { useState } from "react";
import MediaQuery from "react-responsive";
import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList({
  filterMovie,
  textError,
  firtsSearch,
  onClicked,
  addMovieError,
  handleAddMovie,
}) {
  const [visiableMax, setVisiableMax] = useState(12);
  const [visiableMed, setVisiableMed] = useState(8);
  const [visiableMin, setVisiableMin] = useState(5);

  function showMoreMoviesMax() {
    setVisiableMax((prevValue) => {
      return prevValue + 3;
    });
  }

  function showMoreMoviesMed() {
    setVisiableMed((prevValue) => {
      return prevValue + 2;
    });
  }

  function showMoreMoviesMin() {
    return setVisiableMin((prevValue) => {
      return prevValue + 2;
    });
  }

  return (
    <div className="moviesCardList">
      <span
        className={`${
          !filterMovie.length && !firtsSearch
            ? "moviesCardList__error-text"
            : "moviesCardList__invisiable"
        }`}
      >
        {textError || addMovieError || "Ничего не найденно"}
      </span>
      <MediaQuery minWidth={1280}>
        <ul className="moviesCardList__container">
          {filterMovie.slice(0, visiableMax).map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                onClicked={onClicked}
                handleAddMovie={handleAddMovie}
              />
            );
          })}
        </ul>
        {visiableMax < filterMovie.length && (
          <button
            type="submit"
            className="moviesCardList__button-more moviesCardList__button-text"
            onClick={showMoreMoviesMax}
          >
            Еще
          </button>
        )}
      </MediaQuery>
      <MediaQuery minWidth={481} maxWidth={1279}>
        <ul className="moviesCardList__container">
          {filterMovie.slice(0, visiableMed).map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                onClicked={onClicked}
                handleAddMovie={handleAddMovie}
              />
            );
          })}
        </ul>
        {visiableMed < filterMovie.length && (
          <button
            type="button"
            className="moviesCardList__button-more moviesCardList__button-text"
            onClick={showMoreMoviesMed}
          >
            Еще
          </button>
        )}
      </MediaQuery>
      <MediaQuery maxWidth={480}>
        <ul className="moviesCardList__container">
          {filterMovie.slice(0, visiableMin).map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                onClicked={onClicked}
                handleAddMovie={handleAddMovie}
              />
            );
          })}
        </ul>
        {visiableMin < filterMovie.length && (
          <button
            type="submit"
            className="moviesCardList__button-more moviesCardList__button-text"
            onClick={showMoreMoviesMin}
          >
            Еще
          </button>
        )}
      </MediaQuery>
    </div>
  );
}

export default MoviesCardList;
