const network = {
    tmdb_URL: process.env.REACT_APP_TMDB_URL || '',
    wiki_search_URL: process.env.REACT_APP_WIKI_SEARCH_URL || '',
    wiki_page_URL: process.env.REACT_APP_WIKI_PAGE_URL || '',
    imdb_searh_URL: process.env.REACT_APP_IMDB_SEARCH_URL || '',
    imdb_page_URL: process.env.REACT_APP_IMDB_PAGE_URL || '',

    imdb_KEY: process.env.REACT_APP_IMDB_KEY || '',
    imdb_KEY2: process.env.REACT_APP_IMDB_KEY2 || '',
    imdb_KEY3: process.env.REACT_APP_IMDB_KEY3 || '',
    imdb_KEY4: process.env.REACT_APP_IMDB_KEY4 || '',
    imdb_KEY5: 'k_chpatmd9',
}

export default network;