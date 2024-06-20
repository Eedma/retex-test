import {FC} from "react";
import "./articlesGrid.scss";

interface ArticlesGridProps {
    children: JSX.Element[];
}
const ArticlesGrid: FC<ArticlesGridProps> = ({children}) => {
    return <div className="grid-container">{children}</div>;
};

export default ArticlesGrid;
