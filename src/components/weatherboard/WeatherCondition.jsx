import { useContext } from 'react'
import Cloud from '../../assets/icons/cloud.svg'
import Humidity from '../../assets/icons/humidity.svg'
import Temp_Max from '../../assets/icons/temp-max.svg'
import Temp_Min from '../../assets/icons/temp-min.svg'
import Wind from '../../assets/icons/wind.svg'
import { WeatherContext } from '../../context'

function WeatherCondition() {

    // get weather data using Weather Context 
    const { weatherData } = useContext(WeatherContext)
    const { climate, maxTemperature, minTemperature, humidity, cloudePercentage, wind } = weatherData

    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with <span className='underline cursor-pointer'> {climate} </span></p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(maxTemperature)}°</p>
                        <img src={Temp_Max} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(minTemperature)}°</p>
                        <img src={Temp_Min} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}%</p>
                        <img src={Humidity} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudePercentage}%</p>
                        <img src={Cloud} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}km/h</p>
                        <img src={Wind} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WeatherCondition
