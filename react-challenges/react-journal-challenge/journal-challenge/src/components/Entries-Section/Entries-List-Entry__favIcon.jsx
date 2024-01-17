import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'

export default function FavIconOfEntry(isFavorite) {

    const starSrc = isFavorite ? starFilled : starEmpty;
    const altText = isFavorite ? "Filled Star" : "Empty Star";

    return (
        <div className="FavIcon__section">
            <img src={starSrc} alt={altText} />
        </div>
    )
}