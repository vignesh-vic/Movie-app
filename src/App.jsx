
import { useState } from 'react';
import './App.css'
import Search from './components/Search';


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

  return (
    <main>

      <div className='pattern'/>
      <div className='wrapper'>
       {/* <Card title={{Title: "Inception"}}/> */}
       <header>
        <h2 className='title'> <span className='text-purple-400'>Movies</span> You'll Enjoy Without the Hassle</h2>
       </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    
    </main>
  )
}

export default App
