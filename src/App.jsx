import Header from "./components/header/Header";
import WeatherBoard from "./components/weatherboard/WeatherBoard";
import { FavouriteProvider } from "./provider";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  )
}
