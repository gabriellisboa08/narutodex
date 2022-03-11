import "./CardsList.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import data from "../../api";
import { margin } from "@mui/system";

function CardsList() {
    const [characters, setCharacters] = useState([]);
    const [imagesBackGround, setImagesBackGround] = useState([
        "https://wallpaperaccess.com/full/6620899.jpg",
        "https://wallpaperaccess.com/full/1250862.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/538a50bc-ccf9-4fd7-902c-69658ee473a8/dc0nr2u-a70f94f4-95f3-4ad9-9609-1c439d313548.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTM4YTUwYmMtY2NmOS00ZmQ3LTkwMmMtNjk2NThlZTQ3M2E4XC9kYzBucjJ1LWE3MGY5NGY0LTk1ZjMtNGFkOS05NjA5LTFjNDM5ZDMxMzU0OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4g0xnTCJCFCegBiJtugkCn_cZ__4aMD8I3ymfQ6gCls",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38cd4d4a-deae-47bf-b8e7-4ab6d1cfee2a/d92er7a-15496c17-412d-4ad4-8998-34f4c1b4fa1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM4Y2Q0ZDRhLWRlYWUtNDdiZi1iOGU3LTRhYjZkMWNmZWUyYVwvZDkyZXI3YS0xNTQ5NmMxNy00MTJkLTRhZDQtODk5OC0zNGY0YzFiNGZhMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WEv0cSGI_9YegbjfGDDOgEcF5AKSbkFA0KsGpQMhGTQ",
    ]);
    const [scrollBackGround, setScrollBackGround] = useState(0);

    useEffect(async () => {
        const req = await data();
        setCharacters(req);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            let x = scrollBackGround - 100;
            if (x < imagesBackGround.length * -100 + 100) {
                x = 0;
            }
            setScrollBackGround(x);
        }, 10000);
    }, [scrollBackGround]);

    return (
        <div className="container">
            <div className="container--backgroundImage">
                <div
                    className="backgroundImage--carousel--items"
                    style={{
                        width: `${imagesBackGround.length * 100}vw`,
                        marginLeft: `${scrollBackGround}vw`,
                    }}
                >
                    {imagesBackGround.map((image, key) => (
                        <div key={key} className="backgroundImage--item">
                            <img src={image}></img>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container--container--card">
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
