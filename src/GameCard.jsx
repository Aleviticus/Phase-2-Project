function GameCard({game}) {
    return (
        <li className="cards_item">
            <div className="card">
                <img 
                    src={game.image}
                    alt={game.name}
                    className="card_image"
                    />
                <div className="card_content">
                    <div className="card_title">{game.name}</div>
                    <div className="card_detail">
                        <p>Genre: {game.genre}</p>
                        <p>Release Date: {game.release}</p>
                        <p>Platform: {game.platform}</p>
                        <p>About: {game.about}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default GameCard;