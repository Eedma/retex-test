import ArticleDescription from "../ArticleDescription/ArticleDescription";
import ArticlesGrid from "../articlesGrid/ArticlesGrid";
import "./secondHero.scss";

const SecondHero = () => {
    return (
        <ArticlesGrid>
            <div
                className="article-sm"
                style={{
                    backgroundColor: "red",
                }}
            >
                <ArticleDescription
                    labelText="progetto arca"
                    articleTitle="'Qui Odessa, fotografie, progetti e solidarietà"
                    editorPicPath="/assets/pictures/article5/editor.png"
                    editor="Redazione"
                    date="13 Luglio 2022"
                />
            </div>
            <div
                className="article-sm"
                style={{
                    backgroundImage:
                        'url("/assets/pictures/article6/featured.jpeg")',
                }}
            >
                <ArticleDescription
                    labelText="adolescenti"
                    articleTitle="Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne"
                    editorPicPath="/assets/pictures/article6/editor.jpeg"
                    editor="Luca Cereda"
                    date="13 Luglio 2022"
                />
            </div>
            <div
                className="article-sm"
                style={{
                    backgroundImage:
                        'url("/assets/pictures/article7/featured.jpeg")',
                }}
            >
                <ArticleDescription
                    labelText="economia civile"
                    articleTitle="“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento"
                    editorPicPath="/assets/pictures/article7/editor.jpeg"
                    editor="Anna Spena"
                    date="12 Luglio 2022"
                />
            </div>
        </ArticlesGrid>
    );
};

export default SecondHero;
