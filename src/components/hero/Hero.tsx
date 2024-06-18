import ArticleDescription from "../ArticleDescription/ArticleDescription";
import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero-grid">
            <div
                className="full-box featuredImage"
                style={{
                    backgroundImage:
                        'url("/assets/pictures/article1/hero1.jpeg")',
                }}
            >
                <ArticleDescription
                    labelText="migranti"
                    articleTitle="Roccella Ionica, la lampedusa che l'Italia ignora"
                    editorPicPath="/assets/pictures/article1/editor.jpeg"
                    editor="Alessandro Puglia"
                    date="20 Giugno 2022"
                    isFeatured
                />
            </div>

            <div
                className="md-box featuredImage"
                style={{
                    backgroundImage:
                        'url("/assets/pictures/article2/featured.png")',
                }}
            >
                <ArticleDescription
                    labelText="allarmi"
                    articleTitle="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura"
                    editorPicPath="/assets/pictures/article2/editor.png"
                    editor="Ugo Lombi"
                    date="14 Luglio 2022"
                />
            </div>
        </div>
    );
};

export default Hero;
