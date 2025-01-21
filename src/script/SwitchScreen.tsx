import { useState, useEffect } from 'react';
import ScreenTwo from '../components/ScreenTwo';
import ScreenOne from '../components/ScreenOne';

const SwitchScreen = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screens = [<ScreenOne />, <ScreenTwo />];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex(i => (i + 1) % screens.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [screens.length]);

  return (
    <div>
      {screens[currentScreenIndex]}
    </div>
  );
}

export default SwitchScreen;