import React from 'react'
import ReactDOM from 'react-dom/client'
import "./css/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import GamePage from './Gamepage.jsx'
import About from './About.jsx'
import NewGameForm from './NewGameForm.jsx'
import "./css/Navbar.css"
import "./css/Genre.css"
import './css/GameCard.css'
import "./css/GameContainer.css"
import './css/NewGameForm.css'
import "./css/About.css"

const Main = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <GamePage/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/form",
          element: <NewGameForm />
        }
        
      ]
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  )
}

  




ReactDOM.createRoot(document.getElementById('root')).render(<Main />)