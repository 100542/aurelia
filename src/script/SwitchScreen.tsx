import { useState, useEffect } from 'react';
import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';
import ScreenFour from '../components/ScreenFour';

const SwitchScreen = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screens = [<ScreenOne />, <ScreenTwo />, <ScreenThree />, <ScreenFour />];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex(i => (i + 1) % screens.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [screens.length]);

  return (
    <div>
      {screens[currentScreenIndex]}
    </div>
  );
}

export default SwitchScreen;