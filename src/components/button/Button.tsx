import {FC} from "react";
import "./button.scss";

interface ButtonProps {
    text: string;
    backgroundColor?: string;
    label?: boolean;
}
const Button: FC<ButtonProps> = ({
    text,
    backgroundColor = "white",
    label = false,
}) => {
    return (
        <div
            className="button"
            style={{
                backgroundColor: backgroundColor,
                padding: label ? "4px 12px" : "",
            }}
        >
            <h6>{text}</h6>
        </div>
    );
};

export default Button;
