import Button from "../button/Button";
import "./header.scss";

const Header = () => {
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
                <div className="header-secondrow-item">
                    <img
                        src="/assets/icons/open_menu.png"
                        alt="open menu icon"
                    />
                </div>
                <div className="header-secondrow-item">
                    <img src="/assets/icons/search.png" alt="search icon" />
                </div>
            </div>

            <div className="header-thirdrow">
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
