import ScreenText from "../data/ScreenText.json";
import "../styles/FontFaces.css";
import LogoHiRes from "../assets/LogoHiRes.png";
import MeetingData from "../data/MeetingData.json";

export default function ScreenSix() {
  const textSix = ScreenText.TextSix;
  const meetingData = MeetingData.data.length;
  const companyData = MeetingData.data[Math.floor(Math.random() * meetingData)];
  const randomCompanyMeeting = [companyData];

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
              {textSix.title && (
                <h1 className="text-9xl wmedium-font font-bold text-white/80 p-4">
                  {textSix.title}
                </h1>
              )}
            </div>
            {textSix.text && (
              <p className="text-5xl text-white/70 wmedium-font max-w-[80dvw] p-4">
                {textSix.text}
              </p>
            )}
            <div className="flex flex-row ml-2">
            <div className="text-xl bg-black/30 text-white/70 wmedium-font h-16 w-fit text-center border-[#E1C09D] border-2 rounded-md mt-8 p-4">
              Verwachte bedrijven: {meetingData}
            </div>
            </div>
            <div className="w-full h-full flex flex-row justify-center pr-4">
            <div className="text-3xl bg-black/30 text-white/70 wmedium-font min-w-full h-fit w-fit text-left border-[#E1C09D] border-2 rounded-md ml-4 mt-8 p-4">
              <p className="font-bold text-4xl mb-2">{randomCompanyMeeting[0].type}:</p>
                <p className="mb-2">{randomCompanyMeeting[0].company}</p>
                <p className="mb-2">{randomCompanyMeeting[0].time}</p>
                <p className="mb-2">{randomCompanyMeeting[0].goal}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
