import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
    return (
        <footer>
            <div className="footer--items">
                {/*Contém dois items do footer content-items e rodapé*/}

                <div className="footer--content--items">
                    <div className="content--item">
                        <h2>Credits</h2>
                        <p>
                            Feito com amor por Gabriel Lisboa
                            <br /> Dados Retirados da API desenvolvida por
                            Gustavo Nobreza
                        </p>
                    </div>

                    <div className="content--item">
                        <div className="content--item--title">
                            <h2>Gabriel</h2>
                        </div>
                        <div className="contact--items">
                            <div className="contact--item">
                                <a href="#">
                                    <span>
                                        <GitHubIcon />
                                    </span>
                                    <span> GitHub</span>
                                </a>
                            </div>

                            <div className="contact--item">
                                <a href="#">
                                    <span>
                                        <LinkedInIcon />
                                    </span>
                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            <div className="contact--item">
                                <a href="#">
                                    <span>
                                        <InstagramIcon />
                                    </span>

                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="content--item">
                        <h2>Gustavo</h2>

                        <div className="container--contact--items">
                            <div className="contact--item">
                                <a href="#">
                                    <span>
                                        <GitHubIcon />
                                    </span>

                                    <span>GitHub</span>
                                </a>
                            </div>

                            <div className="contact--item">
                                <a href="#">
                                    <span>
                                        <LinkedInIcon />
                                    </span>

                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            <div className="contact--item">
                                <a href="#">
                                    <span>
                                        <InstagramIcon />
                                    </span>

                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="footer--copyright">
                    <CopyrightIcon /><span>Gabriel developer</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
