import Genre from "./Genre";
import GameContainer from "./GameContainer";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function GamePage(){
    const {videoGames} = useOutletContext();
    const [searchString, setSearchString] = useState("")
    
    return(
        <div>
            <Genre searchString={searchString} setSearchString={setSearchString} />
            <GameContainer searchString={searchString }videoGames={videoGames}/>

        </div>
    )
}


export default GamePage;