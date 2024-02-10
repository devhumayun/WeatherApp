import { FavouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

const FavouriteProvider = ({ children }) => {
    const [favourites, setfavourite] = useLocalStorage("favourites", [])

    const addFavourite = (latitude, longitude, location) => {
        setfavourite([
            ...favourites,
            {
                latitude: latitude, longitude: longitude, location: location
            }
        ])
    }

    const removeFromFavourite = (location) => {
        const restFavourite = favourites.filter(fav => fav.location !== location)

        setfavourite(restFavourite)
    }

    return (
        <FavouriteContext.Provider value={{ favourites, addFavourite, removeFromFavourite }}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider