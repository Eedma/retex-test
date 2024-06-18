import {FC} from "react";
import Button from "../button/Button";
import "./articleDescription.scss";

interface ArticleDescriptionProps {
    labelText: string;
    articleTitle: string;
    editorPicPath: string;
    editor: string;
    date: string;
}
const ArticleDescription: FC<ArticleDescriptionProps> = (props) => {
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
