import "./App.css";
import Cards from "./card";
import { useEffect, useState } from "react";
import data from "./api";

function App() {
    const [characters, setCharacters] = useState([]);
    

    useEffect(async () => {
        const req = await data();
        setCharacters(req);
    }, []);

    console.log(characters);


   

    return (
        <div className="App">
            <div className="img--app">
                <img src="https://wallpaperaccess.com/full/6620899.jpg"></img>
            </div>

            <h1>NARUTO PERSON</h1>
            <div className="cardSection">
                {characters.map((person, key) => (
                    <Cards
                        name={person.name}
                        src={person.images[0]}
                        description={person.about}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
