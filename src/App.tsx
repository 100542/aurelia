import './App.css';
import SwitchScreen from './script/SwitchScreen';
import screenBg from './assets/ScreenBg.png';

function App() {
  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundImage: `url(${screenBg})`, backgroundSize: 'cover' }}
    >
      <SwitchScreen />
    </div>
  );
}

export default App;
