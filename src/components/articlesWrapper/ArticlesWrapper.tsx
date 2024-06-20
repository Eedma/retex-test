/* import {FC} from "react";

type backgroundWithImage = {
    backgroundImage: string;
};

type backgroundWithouImage = {
    backgroundColor: string;
};

interface ArticleWrapperProps {
    wrapperClassNames: string;
    children: JSX.Element;
    background: backgroundWithImage | backgroundWithouImage;
}

const ArticleWrapper: FC<ArticleWrapperProps> = ({
    wrapperClassNames,
    children,
    background,
}) => {
    return (
        <div
            className={wrapperClassNames}
            style={{
                backgroundColor: background as backgroundWithouImage,
                backgroundImage: background,
            }}
        >
            {children}
        </div>
    );
};

export default ArticleWrapper;
 */
