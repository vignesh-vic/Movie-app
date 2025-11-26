
import { useState } from 'react';
import './App.css'


const Card=({title})=>{
  return(
    <div className='card'>
      <h2>{title.Title}</h2>
    </div>
  )
}


const  App=()=> {
const [hasLiked, setHasLiked] = useState(false);

  return (
    <main>

      <div className='pattern'/>
      <div className='wrapper'>
       <Card title={{Title: "Inception"}}/>
       <header>
        <h2 className='title'> <span>Movies</span> You'll Enjoy Without the Hassle</h2>
       </header>
        </div>
    
    <p>Search</p>
    </main>
  )
}

export default App
