import Search_Icon from '../../assets/search.svg'
function Searchbar() {
    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required />
                <button type="submit">
                    <img src={Search_Icon} alt='Search Icon' />
                </button>
            </div>
        </form>
    )
}

export default Searchbar