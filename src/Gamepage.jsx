import Genre from "./Genre";
import GameContainer from "./GameContainer";
import { useLocation, useOutletContext } from "react-router-dom";

function GamePage(){
    const {videoGames} = useOutletContext();
    console.log(videoGames)
    return(
        <div>
            <Genre />
            <GameContainer videoGames={videoGames}/>

        </div>
    )
}

export default GamePage;