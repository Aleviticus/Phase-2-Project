import GameCard from "./GameCard.jsx";

function GameContainer({videoGames}){
    return(
        <div>
        <ul className="video-games-cards">
            {videoGames.map((game) => { 
               return (<GameCard 
                game = {game}
                key={game.id} 
                />)
            })}
        </ul>
        </div>
    )
}

export default GameContainer;