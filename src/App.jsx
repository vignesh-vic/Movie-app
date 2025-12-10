
import { useEffect, useState } from 'react';
import './App.css'
import Search from './components/Search';
import Spinner from './components/Spinner';
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const APi_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

const Card=({title})=>{
  return(
    <div className='card'>
      <h2>{title.Title}</h2>
    </div>
  )
}


const  App=()=> {
const [hasLiked, setHasLiked] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [movieList, setMovieList] = useState([]);
const [isLoading, setIsLoading] = useState(false);


const fetchSearchMovies = async (query) => {
  setIsLoading(true);
  setErrorMessage("");
    try {
      const endpoint = `${baseUrl}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, APi_OPTIONS);
      const data = await response.json();
      if (data.response === "False") {
        setErrorMessage(data.error || "No results found.");
        setMovieList([]);
        return;
      }
      setMovieList(data?.results || []);
    } catch (error) {
        console.error("Error fetching search results:", error);
      setErrorMessage("Failed to fetch search results. Please try again.")
    } finally {
      setIsLoading(false);
    }
  
  }
  useEffect(() => {
    fetchSearchMovies()
  }, []);


  return (
    <main>

      <div className='pattern'/>
      <div className='wrapper'>
       {/* <Card title={{Title: "Inception"}}/> */}
       <header>
        <h2 className='title'> <span className='text-purple-400'>Movies</span> You'll Enjoy Without the Hassle</h2>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
       </header>
       <section className='flex justify-center'>
       <div>
            <h1 className=' text-white mt-5 mb-5 text-xl '>All Movies</h1>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {
              isLoading ? (
                <Spinner />
              ) : errorMessage ? (<p className="text-red-500">{errorMessage}</p>) : (
                <div className='flex flex-col gap-4'>
                  {
                    movieList.length > 0
                    &&
                    movieList.map((movie) => (
                      <p className='font-normal text-white'>{movie.title}</p>

                    )
                    )

                  }
                </div>
              )
            }
       </div>
       </section>
        </div>
    
    </main>
  )
}

export default App
