import {useState} from "react";

function GameCard({game}) {

    const [detail, setDetail] = useState(false)

    function onRender() {
        setDetail(!detail)
    }

    return (
        <li className="cards_item">
            <div className={`card ${detail ? '' : 'hidden' }`}>
                <img 
                    onClick={onRender}
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