import MovieContainer from "../../components/MovieGrid/MovieContainer";
import { useContext } from "react";
import { MovieContext } from "../../context/Context";
import "./home.scss";

const Home = () => {
  const { movies, searchOptions } = useContext(MovieContext);

  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
          {!movies.length ? (
            <WelcomeScreen />
          ) : (
            <>
              <h4 className='search-state'>
                {searchOptions.searchedTitle &&
                  `Search results for '${searchOptions.searchedTitle}'`}
                {searchOptions.similarToTitle &&
                  `Similar movies to '${searchOptions.similarToTitle}'`}
              </h4>
              <MovieContainer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

function WelcomeScreen() {
  const { movies, searchOptions } = useContext(MovieContext);

  let heading = "Search for a movie";

  searchOptions.isLoading && (heading = "Searching for movies...");
  !searchOptions.isLoading &&
    !movies.length &&
    (searchOptions.searchedTitle || searchOptions.similarToTitle) &&
    (heading = "No movies found");

  return (
    <div className='ws-wrapper'>
      <h1 className='heading'>{heading}</h1>
      <div className='image'>
        <img
          alt='Squirell'
          src='https://small-buci.s3.eu-central-1.amazonaws.com/squirell.png'
          className={searchOptions.isLoading ? "loading" : ""}
        />
      </div>
    </div>
  );
}
