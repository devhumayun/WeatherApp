import { useContext, useState } from 'react'
import Search_Icon from '../../assets/search.svg'
import { LocationContext } from '../../context'
import { getLocationByName } from '../../data/weatherData'
import useDebounce from '../../hooks/useDebounce'
function Searchbar() {

    // use location context to store the searched location value
    const { setSelectedLocation } = useContext(LocationContext)

    // handle search input controll
    const [searchTerm, setSearchTerm] = useState("")

    // use debounde hook for searching location
    const doSearch = useDebounce((location) => {
        const searched_location = getLocationByName(location)
        setSelectedLocation({ ...searched_location })
    }, 400)

    // handle location searched form
    const handleLocationSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        doSearch(value)
    }

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input value={searchTerm} onChange={handleLocationSearch} className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required />
                <button type="submit">
                    <img src={Search_Icon} alt='Search Icon' />
                </button>
            </div>
        </form>
    )
}

export default Searchbar
