import { useState } from "react";
import "./card.css";

const Cards = (props) => {
    const [clicked, setClicked] = useState(false);

    function click() {
        clicked === true ? setClicked(false) : setClicked(true);
    }

    return (
        <div
            className={clicked === true ? "card--clicked" : "card"}
            onClick={click}
        >
            <div
                className={
                    clicked === true ? "card--clicked--img" : "card--img"
                }
            >
                <img src={props.src} alt={props.alt}></img>
            </div>

            <div
                className={
                    clicked === true
                        ? "card--clicked--description"
                        : "description"
                }
            >
                <h2>{props.name}</h2>
                <span>{props.description}</span>
            </div>
        </div>
    );
};
export default Cards;
