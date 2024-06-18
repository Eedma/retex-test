import Button from "../button/Button";
import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero-grid">
            <div
                className="full-box"
                style={{
                    backgroundImage:
                        'url("/assets/pictures/article1/hero1.jpeg")',
                }}
            >
                <div className="box-details">
                    <Button label text="migranti" />
                    <h2>Roccella Ionica, la lampedusa che l'Italia ignora</h2>
                    <div className="firma">
                        <div className="firma-image">
                            <img
                                src="/assets/pictures/article1/editor.jpeg"
                                alt="editor"
                            />
                        </div>
                        <div className="firma-text">
                            <div className="editor">Di Alessandro Puglia</div>
                            <div className="date">20 Giugno 2022</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
