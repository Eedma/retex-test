import {FC} from "react";
import Button from "../button/Button";
import "./articleDescription.scss";

interface ArticleDescriptionProps {
    labelText: string;
    articleTitle: string;
    editorPicPath: string;
    editor: string;
    date: string;
    isFeatured?: boolean;
}
const ArticleDescription: FC<ArticleDescriptionProps> = (props) => {
    const {
        labelText,
        articleTitle,
        editorPicPath,
        editor,
        date,
        isFeatured = false,
    } = props;
    return (
        <div
            className="container"
            style={{maxWidth: isFeatured ? "55%" : "100%"}}
        >
            <Button label text={labelText} />
            <h1>{articleTitle}</h1>
            <div
                className="firma"
                style={{flexDirection: isFeatured ? "row" : "column"}}
            >
                <div className="firma-image">
                    <img src={editorPicPath} alt={`article by ${editor}`} />
                </div>
                <div className="firma-text">
                    <div className="editor">Di {editor}</div>
                    <div className="date">{date}</div>
                </div>
                {isFeatured ? null : (
                    <img
                        className="read-more-icon"
                        src="/assets/icons/read_more.png"
                        alt="read more"
                    />
                )}
            </div>
        </div>
    );
};

export default ArticleDescription;
