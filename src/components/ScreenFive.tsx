import ScreenText from "../data/ScreenText.json";
import "../styles/FontFaces.css";
import LogoHiRes from "../assets/LogoHiRes.png";
import QuoteData from "../data/QuoteData.json";

export default function ScreenFive() {
  const textFive = ScreenText.TextFive;
  const quote = QuoteData.data[Math.floor(Math.random() * QuoteData.data.length)];
  const randomQuote = [quote];

  return (
    <body className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-black/30 border-2 border-white/10 rounded-md backdrop-blur-md w-[90dvw] h-[90dvh]">
        <div className="flex flex-col justify-between p-4 h-full w-full">
          <div>
          <div className="flex flex-row gap-10 text-center">
            <img src={LogoHiRes} alt="Aurelia Logo"
            className="w-40 h-40 p-4"
            />
            {textFive.title && (
              <h1 className="text-9xl wmedium-font font-bold text-white/80 p-4">
                {textFive.title}
              </h1>
            )}
            </div>
            {textFive.text && (
              <p className="text-5xl text-white/70 wmedium-font max-w-[80dvw] p-4">{textFive.text}</p>
            )}
            <div className="flex flex-row justify-center w-full h-full">
            <div className="text-5xl bg-black/30 text-white/80 wmedium-font min-w-full font-bold h-fit w-fit text-center border-[#E1C09D] border-2 rounded-md mt-8 p-8">
               {randomQuote[0].type}: {randomQuote[0].content}
            </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
