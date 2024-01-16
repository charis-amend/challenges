import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'

export default function FavIconOfEntry() {
    return (
        <div className="FavIcon__section">
            <img src={starEmpty} alt="starEmpty" />
            <img src={starFilled} alt="starFilled" />
        </div>
    )
}