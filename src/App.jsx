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
    },   [])

    

    return (
      <div>
        <Title />
        <Navbar />
        <Outlet  context={{videoGames, setVideoGames}}/>
      </div>
    )
  }
  
  


export default App
