import "./CardsList.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import data from "../../api";

function CardsList() {
    const [characters, setCharacters] = useState([]);
    const [imagesBackGround, setImagesBackGround] = useState([
        "https://wallpaperaccess.com/full/6620899.jpg",
        "https://wallpaperaccess.com/full/1250862.jpg",
    ]);
    const [indexImage, setIndexImage] = useState(0);

    useEffect(async () => {
        const req = await data();
        setCharacters(req);
    }, []);

    useEffect(() => {
        while (indexImage == 1) {
            setTimeout(setIndexImage(indexImage + 1), 3000);
        }
    }, [indexImage]);

    return (
        <div className="container">
            <div className="container--backgroundImage">
                <div className="backgroundImage--item">
                    <img src={imagesBackGround[indexImage]}></img>
                </div>
            </div>
            <div className="container--app">
                <h1>NARUTO CHARACTERS</h1>
                <div className="container--card">
                    {characters.map((person, key) => (
                        <Card
                            name={person.name}
                            src={
                                !person.images[1]
                                    ? person.images[0]
                                    : person.images[1]
                            }
                            description={person.about}
                            alt={`foto_${person.name}`}
                            key={key}
                            images={person.images}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsList;
