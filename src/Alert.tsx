import "./Alert.css"
import { Visibility } from "./visibility";

interface AlertProps {
    text: string;
    visibility: Visibility;
    setVisibility: (visibility: Visibility) => void;
}

function visibility_to_css(visibility: Visibility) {
    switch (visibility) {
        case Visibility.hidden:
            return "hidden-alert";
        case Visibility.visible:
            return "display-alert";
        // default: unreachable
    }
}

function Alert({text, visibility, setVisibility}: AlertProps) {
    return (
        <div className={visibility_to_css(visibility)}>
            {text}
            <button className="close-alert-button" onClick={() => setVisibility(Visibility.hidden)}>X</button>
        </div>
    );
}

export default Alert;