import {FC} from "react";
import "./banner.scss";

interface BannerProps {
    title: string;
    subtitle: string;
}
const Banner: FC<BannerProps> = ({title, subtitle}) => {
    return (
        <div className="banner-container">
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
        </div>
    );
};

export default Banner;
