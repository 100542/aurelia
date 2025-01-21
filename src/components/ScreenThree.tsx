import ScreenText from "../data/ScreenText.json";
import "../styles/FontFaces.css";
import LogoHiRes from "../assets/LogoHiRes.png";
import { useEffect, useState } from "react";

export default function ScreenOne() {
  const textThree = ScreenText.TextThree;

  interface WeatherData {
    hourly: {
      temperature_2m: number[];
      precipitation: number[];
    };
    timezone: string[];
  }

  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.9225&longitude=4.47917&hourly=temperature_2m,precipitation"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <body className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-black/30 border-2 border-white/10 rounded-md backdrop-blur-md w-[90dvw] h-[90dvh]">
        <div className="flex flex-col justify-between p-4 h-full w-full">
          <div>
            <div className="flex flex-row gap-10 text-center">
              <img
                src={LogoHiRes}
                alt="Aurelia Logo"
                className="w-40 h-40 p-4"
              />
              {textThree.title && (
                <h1 className="text-9xl wmedium-font font-bold text-white/80 p-4">
                  {textThree.title}
                </h1>
              )}
            </div>
            {textThree.text && (
              <p className="text-5xl text-white/70 wmedium-font max-w-[80dvw] p-4">
                {textThree.text}
              </p>
            )}
            <div className="flex flex-row justify-between gap-4 w-full h-full mt-24">
            {data?.hourly?.temperature_2m?.[0] !== undefined && (
            <div className="flex flex-col justify-center bg-black/30 border-2 border-[#E1C09D] text-center rounded-2xl w-[32%] h-full">
                <p className="text-9xl text-white/80 wmedium-font max-w-[80dvw] p-4">
                {data.hourly.temperature_2m[0]} °C
              </p>
            </div>
            )}
            {data?.hourly?.precipitation?.[0] !== undefined && (
            <div className="flex flex-col justify-center bg-black/30 border-2 border-[#E1C09D] text-center rounded-2xl w-[32%] h-full">
                <p className="text-9xl text-white/80 wmedium-font max-w-[80dvw] p-4">
                {data.hourly.precipitation[0]} mm
              </p>
            </div>
            )}
            {data?.timezone && (
            <div className="flex flex-col justify-center bg-black/30 border-2 border-[#E1C09D] text-center rounded-2xl w-[32%] h-full">
                <p className="text-9xl flex flex-col text-white/80 wmedium-font max-w-[80dvw] p-4">
                {data.timezone}
                <span className="text-xl text-white/70 wmedium-font max-w-[80dvw] p-4">Timezone</span>
              </p>
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}