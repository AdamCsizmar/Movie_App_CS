import { useContext } from "react";
import searchMovies from "../../services/searchMovies";
import { MovieContext } from "../../context/Context";
import { BiSearchAlt } from "react-icons/bi";
import "./style.scss";

export const Header = () => {
  const { setMovies, setSearchOptions } = useContext(MovieContext);

  const handleSearch = async (event: any) => {
    event.preventDefault();
    const searchTerm: string = event.currentTarget.searchInput.value;
    if (!searchTerm) return;
    setSearchOptions({ isLoading: true });
    const movies = await searchMovies(searchTerm);
    setMovies(movies);
    setSearchOptions({ isLoading: false, searchedTitle: searchTerm });
  };

  return (
    <header className='header'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          id='searchInput'
          className='searchInput'
          type='text'
          placeholder='Search for a movie'
        />
        <button className='search-btn' type='submit'>
          <BiSearchAlt />
        </button>
      </form>
    </header>
  );
};
