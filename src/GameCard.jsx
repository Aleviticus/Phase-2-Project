function GameCard({game}){
    return(
        <div>
            <img src={game.image} />
            <p>{game.name}</p>
            <p>{game.genre}</p>
            <p>{game.release}</p>
            <p>{game.platform}</p>
            <p>{game.about}</p>
        </div>
    )
}

export default GameCard;