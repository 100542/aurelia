import "./App.css";
import SwitchScreen from "./script/SwitchScreen";
import Waves from "./components/BackgroundComponent";
import { Routes, Route, useLocation } from "react-router-dom";
import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";
import ScreenThree from "./components/ScreenThree";
import ScreenFour from "./components/ScreenFour";
import ScreenFive from "./components/ScreenFive";
import ScreenSix from "./components/ScreenSix";
import ScreenSeven from "./components/ScreenSeven";

function App() {
  const location = useLocation()

  const noSwitching = [
    "/screenone",
    "/screentwo",
    "/screenthree",
    "/screenfour",
    "/screenfive",
    "/screensix",
    "/screenseven",
  ];

  return (
    <div className="w-screen h-screen bg-black">
      <Waves
        lineColor="#E1C09D"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.03}
        waveSpeedY={0.03}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      
      {/* als de pathname een van de pathnames uit noSwitching is wordt SwitchScreen niet geladen. 
      Zo kan één pagina makkelijk worden aangepast zonder het telkens wijzigen van de SwitchScreen functie.
      */}
      {!noSwitching.includes(location.pathname) && <SwitchScreen />}

      <Routes>
        <Route path="/screenone" element={<ScreenOne />} />
        <Route path="/screentwo" element={<ScreenTwo />} />
        <Route path="/screenthree" element={<ScreenThree />} />
        <Route path="/screenfour" element={<ScreenFour />} />
        <Route path="/screenfive" element={<ScreenFive />} />
        <Route path="/screensix" element={<ScreenSix />} />
        <Route path="/screenseven" element={<ScreenSeven />} />
      </Routes>
    </div>
  );
}

export default App;
