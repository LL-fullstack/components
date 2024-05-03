
function Button(props) {
    return (
        <div>
            <button className={props.firstButton}>{props.firstButtonText}</button>
            <button className={props.secondButton}>{props.secondButtonText}</button>
        </div>
    );
}

export default Button;

