import Button from "../button/Button";
import "./articleDescription.scss";

const ArticleDescription = (props) => {
    const {labelText, articleTitle, editorPicPath, editor, date} = props;
    return (
        <div className="container">
            <Button label text={labelText} />
            <h1>{articleTitle}</h1>
            <div className="firma">
                <div className="firma-image">
                    <img src={editorPicPath} alt={`article by ${editor}`} />
                </div>
                <div className="firma-text">
                    <div className="editor">Di {editor}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDescription;
