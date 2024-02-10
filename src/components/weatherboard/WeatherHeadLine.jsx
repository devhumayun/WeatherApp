import { useContext } from 'react';
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import Pin from '../../assets/pin.svg';
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from '../../context';
import { getFromatedDate } from '../../utils/dateUtil';

function WeatherHeadLine() {
    const { weatherData } = useContext(WeatherContext)
    const { climate, location, temperature, time } = weatherData;

    function getWeatherIcon(climate) {
        switch (climate) {
            case "Rain":
                return RainIcon;
            case "Clouds":
                return CloudIcon;
            case "Clear":
                return SunnyIcon;
            case "Snow":
                return SnowIcon;
            case "Thunder":
                return ThunderIcon;
            case "Fog":
                return HazeIcon;
            case "Haze":
                return HazeIcon;
            case "Mist":
                return HazeIcon;

            default:
                return SunnyIcon;
        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[50px] lg:text-[60px] xl:text-[80px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img width={20} src={Pin} />
                        <h2 className="text-2xl lg:text-[30px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-md">{getFromatedDate(time, "time", false)} - {getFromatedDate(time, "date", false)}</p>
        </div>
    )
}

export default WeatherHeadLine
