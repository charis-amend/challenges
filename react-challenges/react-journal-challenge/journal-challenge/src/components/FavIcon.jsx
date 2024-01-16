import starFilled from "../../resources/star-filled.svg";
import starEmpty from "../../resources/star.svg"

export default function FavIcon() {
    return (
        <div className="FavIcon__section">
            <starEmpty src={starEmpty} alt="starEmpty" />
            <starFilled src={starFilled} alt="starFilled" />
        </div>
    )
}