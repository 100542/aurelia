import ScreenText from "../data/ScreenText.json";
import "../styles/FontFaces.css";
import LogoHiRes from "../assets/LogoHiRes.png";
import VacationData from '../data/VacationData.json';

export default function ScreenSeven() {
  const textSeven = ScreenText.TextSeven;
  const vacationData = VacationData.vacations[Math.floor(Math.random() * VacationData.vacations.length)];
  const randomVacation = [vacationData];

  return (
    <body className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-black/30 border-2 border-white/10 rounded-md backdrop-blur-md w-[90dvw] h-[90dvh]">
        <div className="flex flex-col justify-between p-4 h-full w-full">
          <div>
          <div className="flex flex-row gap-10 text-center">
            <img src={LogoHiRes} alt="Aurelia Logo"
            className="w-40 h-40 p-4"
            />
            {textSeven.title && (
              <h1 className="text-9xl wmedium-font font-bold text-white/80 p-4">
                {textSeven.title}
              </h1>
            )}
            </div>
            {textSeven.text && (
              <p className="text-5xl text-white/70 wmedium-font max-w-[80dvw] p-4">{textSeven.text}</p>
            )}
            <div className="flex flex-row justify-center h-full w-full">
            <div className="text-5xl bg-black/30 text-white/70 wmedium-font h-full w-full text-center border-[#E1C09D] border-2 rounded-md mt-8 p-4 flex flex-col justify-center">
                <p>{randomVacation[0].destination}: {randomVacation[0].tip}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
