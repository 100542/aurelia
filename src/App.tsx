import "./App.css";
import SwitchScreen from "./script/SwitchScreen";
import Waves from "./components/BackgroundComponent";

function App() {
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
      <SwitchScreen />
    </div>
  );
}

export default App;
