import ScreenText from "../data/ScreenText.json";
import "../styles/FontFaces.css";
import LogoHiRes from "../assets/LogoHiRes.png";
import MeetingData from "../data/MeetingData.json";
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';

export default function ScreenOne() {
  const textOne = ScreenText.TextOne;
  const meetingData = MeetingData.data.length;

  return (
    <body className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-black/30 border-2 border-white/10 rounded-md backdrop-blur-md w-[90dvw] h-[90dvh]">
        <div className="flex flex-col justify-between p-4 h-full w-full">
          <div>
          <div className="flex flex-row gap-10 text-center">
            <img src={LogoHiRes} alt="Aurelia Logo"
            className="w-40 h-40 p-4"
            />
            {textOne.title && (
              <h1 className="text-9xl wmedium-font font-bold text-white/80 p-4">
                {textOne.title}
              </h1>
            )}
            </div>
            {textOne.text && (
              <p className="text-5xl text-white/70 wmedium-font max-w-[80dvw] p-4">{textOne.text}</p>
            )}
            <div className="text-xl bg-black/30 text-white/70 wmedium-font h-16 w-fit text-center border-[#E1C09D] border-2 rounded-md mt-8 p-4">
               <HourglassEmptyOutlinedIcon style={{ color: "white", width: 25, height: 25, opacity: 70 }} /> Verwachte bedrijven: {meetingData}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
