import {useState} from "react";
import Button from "../button/Button";
import "./header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetIsMenuOpen = () =>
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);

    return (
        <>
            <div className="header-firstrow">
                <div className="header-firstrow-item">
                    <h4>contribuisci</h4>
                </div>
                <div className="header-firstrow-item">
                    <h4>abbonati</h4>
                </div>
                <div className="header-firstrow-item">
                    <h4>accedi</h4>
                </div>
            </div>

            <div className="header-secondrow">
                <div
                    className="header-secondrow-item"
                    onClick={handleSetIsMenuOpen}
                >
                    {isMenuOpen ? (
                        <img
                            src="/assets/icons/close_menu.png"
                            alt="close menu icon"
                        />
                    ) : (
                        <img
                            src="/assets/icons/open_menu.png"
                            alt="open menu icon"
                        />
                    )}
                </div>
                <div className="header-secondrow-item">
                    <img src="/assets/icons/search.png" alt="search icon" />
                </div>
            </div>

            <div className="header-thirdrow">
                {isMenuOpen && (
                    <div className="opened-menu">
                        <div className="opened-menu-box-lg">
                            <h2>Articoli</h2>
                            <h6>Trend, dati e novità del Terzo Settore</h6>
                        </div>
                        <div className="opened-menu-box-lg">
                            <h2>Storie</h2>
                            <h6>
                                Letture ed approfondimenti dei fenomi complessi
                            </h6>
                        </div>
                        <div className="opened-menu-box-lg">
                            <h2>Interviste</h2>
                            <h6>Racconti reali di persone ed organizzazioni</h6>
                        </div>
                        <div className="opened-menu-box-lg">
                            <h2>Opinioni</h2>
                            <h6>
                                Riflessioni e confronti dei nostri opinionisti
                            </h6>
                        </div>
                        <div className="opened-menu-box-lg">
                            <h2>Podcast</h2>
                            <h6>
                                Un luogo per dar voce ai protagonisti della
                                sostenibilità
                            </h6>
                        </div>
                        <div className="opened-menu-box-lg">
                            <h2>Bookazine</h2>
                            <h6>
                                Una rivista da leggere e un libro da conservare
                            </h6>
                        </div>

                        <div className="opened-menu-box-sm">
                            <h6>Chi siamo</h6>
                        </div>
                        <div className="opened-menu-box-sm">
                            <h6>Comitato editoriale</h6>
                        </div>
                        <div className="opened-menu-box-sm">
                            <h6>Servizi</h6>
                        </div>
                        <div className="opened-menu-box-sm">
                            <h6>Agenda/Eventi</h6>
                        </div>
                        <div className="opened-menu-box-sm">
                            <h6>Mappa dell'attivismo</h6>
                        </div>
                        <div className="opened-menu-box-sm">
                            <h6>Inchieste crowdfuncding</h6>
                        </div>
                    </div>
                )}
                <div className="header-thirdrow-item">
                    <h3>tutti i temi</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>ambiente</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>economia</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>mondo</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>non profit</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>politica</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>società</h3>
                </div>
                <div className="header-thirdrow-item">
                    <h3>welfare</h3>
                </div>
            </div>

            <div className="header-fourthrow">
                <div className="header-fourthrow-item">
                    <h2>tutti i temi</h2>
                </div>
                <div className="header-fourthrow-buttons-container">
                    <Button text="ambiente" backgroundColor="#E2F1E8" />
                    <Button text="economia" />
                    <Button text="mondo" backgroundColor="#F1DADA" />
                    <Button text="non profit" />
                    <Button text="politica" backgroundColor="#F1F1E2" />
                    <Button text="società" />
                    <Button text="welfare" />
                </div>
            </div>
        </>
    );
};

export default Header;
