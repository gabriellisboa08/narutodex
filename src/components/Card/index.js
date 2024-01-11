import { useEffect, useState, useCallback } from "react";
import "./card.css";
import Modal from "../Modal";

const Card = (props) => {
    const [select, setSelect] = useState(false);
    return (
        <>
            <div
                className="card"
                onClick={() => {
                    setSelect(!select);
                }}
            >
                <div className="card--img">
                    <img src={props.src} alt={props.alt}></img>
                </div>

                <div className="divName">
                    <h2>{props.name}</h2>
                </div>
            </div>
            {select && (
                <Modal
                    name={props.name}
                    uniqueTraits={[props.uniqueTraits]}
                    images={[props.images]}
                    onClick={() => setSelect(false)}
                />
            )}
        </>
    );
};
export default Card;
