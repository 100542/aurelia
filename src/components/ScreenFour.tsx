import ScreenText from "../data/ScreenText.json";
import LogoHiRes from "../assets/LogoHiRes.png";
import { useEffect, useState } from "react";

export default function ScreenOne() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const textFour = ScreenText.TextFour;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours =
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours();
  const minutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();
  const seconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;

  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const date = currentTime.getDate();

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
              {textFour.title && (
                <h1 className="text-9xl wmedium-font font-bold text-white/80 p-4">
                  {textFour.title}
                </h1>
              )}
            </div>
            {textFour.text && (
              <p className="text-5xl text-white/70 wmedium-font max-w-[80dvw] p-4">
                {textFour.text}
              </p>
            )}
            <div className="flex flex-row justify-between gap-10 w-full h-full">
              <div className="flex flex-col justify-center bg-black/30 border-2 border-[#E1C09D] text-center rounded-2xl w-full h-full">
                <p className="text-9xl text-white/80 wmedium-font max-w-[80dvw] p-4">
                  {time}
                </p>
              </div>
              <div className="flex flex-col justify-center bg-black/30 border-2 border-[#E1C09D] text-center rounded-2xl w-full h-full">
                <p className="text-9xl text-white/80 wmedium-font max-w-[80dvw] p-4">
                  {date}/{month}/{year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}