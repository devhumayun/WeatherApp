import Weather_logo from '../../assets/logo.svg'
function Logo() {
    return (
        <a href="./index.html">
            <img className="h-9" src={Weather_logo} alt="Weather App" />
        </a>
    )
}

export default Logo
