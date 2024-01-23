import {useState} from "react";

function NewGameForm() {

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
    const [platform, setPlatform] = useState("")
    const [about, setAbout] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        let newGame = {name, image, genre, platform, date, about};

        fetch("", {
            method:"POST",
            headers: {
                "content-type": "Application/json",
            },
            body: JSON.stringify(newGame),
        })
        .then((res) => res.json())
        .then((data) => (data))
    }

    return (
        <div className="new-game-form">
            <h2>New Game</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Game Title"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Game Pic"
                    value={image}
                    onChange={(e) => {setImage(e.target.value)}}
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Game Genre"
                    value={genre}
                    onChange={(e) => {setGenre(e.target.value)}}
                />
                <input
                    type="text"
                    name="platform"
                    placeholder="Platform"
                    value={platform}
                    onChange={(e) => {setPlatform(e.target.value)}}
                />
                <input
                    type="text"
                    name="date"
                    placeholder="Release Date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}}
                />
                <input
                    type="text"
                    name="about"
                    placeholder="Description"
                    value={about}
                    onChange={(e) => {setAbout(e.target.value)}}
                />
                <button type="submit">Add Game</button>
            </form>
        </div>
    )

}

export default NewGameForm