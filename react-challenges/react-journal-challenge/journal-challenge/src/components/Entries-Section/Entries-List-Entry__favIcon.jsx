import starEmpty from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'
import { useState } from 'react';

export default function FavIconOfEntry() {

    // default for fav icon is not favorised === starEmpty
    const [favorised, setFavorised] = useState(true)

    // const starSrc = isFavorite ? starFilled : starEmpty;
    // const altText = isFavorite ? "Filled Star" : "Empty Star";

    return (
        <div className="FavIcon__section">
            {/* change state variable favorised when button is clicked */}
            {/* default favorised = false, so !favorisedd == true */}
            <button onClick={() => setFavorised(!favorised)}>

                {/* if favorised = empty star img */}
                {/* if !favorised = filled star img */}

                {favorised ? (
                    < img src={starEmpty} alt="empty-star" />
                ) : (
                    < img src={starFilled} alt="empty-star" />
                )}
            </button >
        </div>

    )
}