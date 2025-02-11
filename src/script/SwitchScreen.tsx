import { useState, useEffect } from 'react';
import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';
import ScreenFour from '../components/ScreenFour';
import ScreenFive from '../components/ScreenFive';
import ScreenSix from '../components/ScreenSix';
import ScreenSeven from '../components/ScreenSeven';

const SwitchScreen = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screens = [<ScreenOne />, <ScreenTwo />, <ScreenThree />, <ScreenFour />, <ScreenFive />, <ScreenSix />, <ScreenSeven />,];

  const handleNextScreen = (event: { key: string; }) => {
    if (event.key === " ") {
      console.log("Interactie: spacebar (volgende scherm tonen)");
      setCurrentScreenIndex(i => (i + 1) % screens.length);
    }
  }

  const handlePrevScreen = (event: {key: string; }) => {
    if (event.key === "a") {
      console.log("Interactie: a (vorige scherm tonen)")
      setCurrentScreenIndex(i => (i - 1 + screens.length) % screens.length);
    }
  }

  useEffect(() => {
    // Dit zou betekenen dat er geen scherm wordt getoond. Vrijwel onmogelijk, maar voor de zekerheid.
    if (currentScreenIndex < 0) {
      location.reload();
    }
    // Dit zou betekenen dat er geen scherm wordt getoond. Vrijwel onmogelijk, maar voor de zekerheid.

    window.addEventListener("keydown", handleNextScreen);
    window.addEventListener("keydown", handlePrevScreen);

    return () => {
      window.removeEventListener("keydown", handleNextScreen);
      window.removeEventListener("keydown", handlePrevScreen);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex(i => (i + 1) % screens.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [screens.length]);

  return (
    <div>
      {screens[currentScreenIndex]}
    </div>
  );
}

export default SwitchScreen;