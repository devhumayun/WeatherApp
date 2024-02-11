import { useContext, useState } from 'react'
import Search_Icon from '../../assets/search.svg'
import { LocationContext } from '../../context'
import { getLocationByName } from '../../data/weatherData'
function Searchbar() {

    // use location context to store the searched location value
    const { setSelectedLocation } = useContext(LocationContext)

    // handle search input controll
    const [searchTerm, setSearchTerm] = useState("")

    // handle location searched form
    const handleSearchTermSubmit = (e) => {
        e.preventDefault()
        // get the searched location value & checked is exists
        const searched_location = getLocationByName(searchTerm)
        setSelectedLocation({ ...searched_location })
    }

    return (
        <form action="#" onSubmit={handleSearchTermSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required />
                <button type="submit">
                    <img src={Search_Icon} alt='Search Icon' />
                </button>
            </div>
        </form>
    )
}

export default Searchbar
