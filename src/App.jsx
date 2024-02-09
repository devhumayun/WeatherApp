import Header from "./components/header/Header";
import WeatherBoard from "./components/weatherboard/WeatherBoard";

export default function App() {
  return (
    <div className="grid place-items-center">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  )
}
