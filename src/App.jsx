
import { useEffect, useState } from 'react';
import './App.css'
import Search from './components/Search';
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

const fetchSearchMovies = async (query) => {
    try {
      const endpoint = `${baseUrl}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, APi_OPTIONS);
    } catch (error) {
        console.error("Error fetching search results:", error);
      setErrorMessage("Failed to fetch search results. Please try again.")
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
       <section>
        <h2>All Movies</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
       </section>
        </div>
    
    </main>
  )
}

export default App
