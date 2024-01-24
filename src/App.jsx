import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Title from './Title'
import { Outlet } from 'react-router-dom'

function App() {

  const [videoGames, setVideoGames] = useState([])

    useEffect(() => {
     fetch('http://localhost:3000/video-games')
        .then(res => res.json())
        .then(data => setVideoGames(data))
    }, [])

    function updateGames(newGame) {
      setVideoGames([...videoGames, newGame])
    }

    

    return (
      <div>
        <Title />
        <Navbar />
        <Outlet  context={{videoGames, setVideoGames, updateGames}}/>
      </div>
    )
  }
  
  


export default App
