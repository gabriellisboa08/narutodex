import { useEffect, useState } from "react";
import "./Modal.css";
import { Carousel, NavItem } from "react-bootstrap"; // lembrar de excluir este módulo, pois não está sendo usado.
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { CommentsDisabledOutlined } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";

const Modal = (props) => {
    const [images, setImages] = useState([]);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        setImages(...props.images);
    }, [images]);

    const hendleLeftArrow = () => {
        let x = scrollX + 300;
        if (scrollX == 0) {
            if (x > 0) {
                x = 0;
            }
        }
        setScrollX(x);
    };
    const hendleRightArrow = () => {
        let width = -images.length * 300;
        let x = scrollX - 300;
        if (x <= width) {
            x = width + 300;
            console.log(x);
        }
        setScrollX(x);
    };

    return (
        <div className="container--modal">
            <div className="container--container--modal">
                <div className="container--clickExit" onClick={props.onClick}>
                    {/*Esta div serve paera ser filha de container--modal e ser possível clicar nela para que ela feche o modal sem que clicando nas irmas dela feche o modal também!*/}
                </div>
                <div className="container--items--modal">
                    <div className="container--carousel">
                        {
                            images.length > 1 && (
                                <div
                                    className="arrowLeft"
                                    onClick={hendleLeftArrow}
                                >
                                    <ArrowLeftIcon />
                                </div>
                            ) /* Esta verificação cria uma div para o botões de avançar a imagem e retroceder apenas se ghouver mais de uma imagem*/
                        }
                        {
                            images.length > 1 && (
                                <div
                                    className="arrowRight"
                                    onClick={hendleRightArrow}
                                >
                                    <ArrowLeftIcon />
                                </div>
                            ) /* Esta verificação cria uma div para o botões de avançar a imagem e retroceder apenas se ghouver mais de uma imagem*/
                        }
                        <div
                            className="carousel"
                            style={{
                                marginLeft: scrollX,
                                width: images.length * 300,
                            }}
                        >
                            {images.map((imagem) => (
                                <div key={imagem} className="carousel--item">
                                    <img
                                        src={imagem}
                                        alt="Back Ground Image"
                                    ></img>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2>{props.name}</h2>
                    <div className="container--description">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
