import {useState} from "react";
import { useOutletContext } from "react-router-dom";

function NewGameForm() {
    const {updateGames, videoGames, setVideoGames} = useOutletContext();

    const [formValues, setFormValues] = useState({
        name: "",
        genre: "",
        image: "",
        release: "",
        platform: "",
        about: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        setVideoGames([...videoGames, formValues]);
        setFormValues({
            name: "",
            genre: "",
            image: "",
            release: "",
            platform: "",
            about: ""
        })

        fetch("http://localhost:3000/video-games", {
            method:"POST",
            headers: {
                "content-type": "Application/json",
            },
            body: JSON.stringify(formValues),
        })
        .then((res) => res.json())
        .then((data) => updateGames(data))
    }

    return (
        <div className="new-game-form">
            <h2>New Game</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Game Title"
                    value={formValues.name}
                    onChange={(e) => 
                        setFormValues({...formValues, name: e.target.value})
                    }
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Game Pic"
                    value={formValues.image}
                    onChange={(e) => 
                        setFormValues({...formValues, image: e.target.value})
                }
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={formValues.genre}
                    onChange={(e) => 
                        setFormValues({...formValues, genre: e.target.value})
                }
                />
                <input
                    type="text"
                    name="platform"
                    placeholder="Platform"
                    value={formValues.platform}
                    onChange={(e) => 
                        setFormValues({...formValues, platform: e.target.value})
                }
                />
                <input
                    type="text"
                    name="date"
                    placeholder="Release Date"
                    value={formValues.release}
                    onChange={(e) => 
                        setFormValues({...formValues, release: e.target.value})
                }
                />
                <textarea
                    type="text"
                    name="about"
                    placeholder="Description"
                    
                    value={formValues.about}
                    onChange={(e) => 
                        setFormValues({...formValues, about: e.target.value})
                }
                />
                <button id="create" type="submit">Add Game</button>
            </form>
        </div>
    )

}

export default NewGameForm