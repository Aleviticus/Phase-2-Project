import GameCard from "./GameCard.jsx";

function GameContainer({videoGames, searchString}){


    const filteredVideoGames = videoGames.filter((game) => 
    game.name.toLowerCase().includes(searchString.toLowerCase()) ||
    game.genre.toLowerCase().includes(searchString.toLowerCase()) ||
    game.release.toLowerCase().includes(searchString.toLowerCase()) ||
    game.platform.toLowerCase().includes(searchString.toLowerCase()) ||
    game.about.toLowerCase().includes(searchString.toLowerCase()) 
    )

    return(
        <div className="video-games-container">
        <ul className="video-games-cards">
            {filteredVideoGames.map((game) => { 
               return (<GameCard
                className="video-game-card" 
                game = {game}
                key={game.id} 
                />)
            })}
        </ul>
        </div>
    )
}

export default GameContainer;