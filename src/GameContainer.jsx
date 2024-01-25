import GameCard from "./GameCard.jsx";

function GameContainer({videoGames, searchString}){

    // 1.   Get access to our search filtering string (state).
    // 2.   Create a `filteredVideoGames` "substate" that logically filters `videoGames` 
    //      based on the string match.
    // 3.   Replace the mapping invocation on Line 13 (`{videoGames.map(...)}`) 
    //      with an invocation for the newly created `filteredVideoGames`, so it looks 
    //      more like this:
    //          `{filteredVideoGames.map((game) => {`

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
            {/* 
            If `filteredVideoGames` is empty, conditionally render
            a unique message with some text like "No matching games found." 
            */}
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