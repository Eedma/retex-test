import "./button.scss";

const Button = ({text, backgroundColor = "white"}) => {
    return (
        <div className="button" style={{backgroundColor: backgroundColor}}>
            <h6>{text}</h6>
        </div>
    );
};

export default Button;
