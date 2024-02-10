import { useContext, useState } from 'react'
import Favourite_Icon_red from '../../assets/heart-red.svg'
import Favourite_Icon from '../../assets/heart.svg'
import { FavouriteContext, WeatherContext } from '../../context'
function ToggleFavourite() {

    //state for toggling the fav button
    const [isFavourite, setIsFavourite] = useState(false)

    // get weather data from weather context and extract
    const { weatherData } = useContext(WeatherContext)
    const { latitude, longitude, location } = weatherData

    // handle weather favourite toggle functionlity
    const { favourites, addFavourite, removeFromFavourite } = useContext(FavouriteContext)
    function handleToggleFavourite() {
        const found = favourites.find((fav) => fav.location === location)

        if (!found) {
            addFavourite(latitude, longitude, location)
        } else {
            removeFromFavourite(location)
        }

        setIsFavourite(!isFavourite)
    }


    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleToggleFavourite}>
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? Favourite_Icon_red : Favourite_Icon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ToggleFavourite
