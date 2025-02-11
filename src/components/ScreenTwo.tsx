import { useEffect, useState } from "react";
import ScreenText from "../data/ScreenText.json";
import "../styles/FontFaces.css";
import LogoHiRes from "../assets/LogoHiRes.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

import { ChartData } from "chart.js";

export default function ScreenTwo() {
  const textOne = ScreenText.TextTwo;

  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });  

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
        );
        const data = await response.json();
        setPrice(data.price);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchKlines = async () => {
      try {
        const response = await fetch(
          "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=50"
        );
        const data = await response.json();

        const labels = data.map((item: (string | number | Date)[]) =>
          new Date(item[0]).toLocaleTimeString()
        );
        const prices = data.map((item: string[]) => parseFloat(item[4]));

        type NewType = ChartData<"line">;

        setChartData({
          labels,
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: prices,
              borderColor: "#E1C09D",
              backgroundColor: "#E1C09D",
              tension: 0.4,
            },
          ] as NewType["datasets"],
        });
      } catch (error) {
        console.error("Error fetching candlestick data:", error);
      }
    };

    fetchKlines();

    const interval = setInterval(fetchKlines, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-black/30 border-2 border-white/10 rounded-md backdrop-blur-md w-[90dvw] h-[90dvh]">
        <div className="flex flex-col justify-between p-4 h-full w-full">
          <div>
            <div className="flex flex-row gap-10 text-center">
              <img
                src={LogoHiRes}
                alt="Aurelia Logo"
                className="w-32 h-32 p-4"
              />
              {textOne.title && (
                <h1 className="text-8xl wmedium-font font-bold text-white/80 p-4">
                  {textOne.title}
                </h1>
              )}
            </div>
            <div className="text-left mt-10">
              <h2 className="text-5xl wmedium-font font-bold p-4 text-white/70">
                Waarde Bitcoin (USD)
              </h2>
              <p className="text-4xl p-4 text-white/70 mt-4">
              {loading ? "Loading..." : `$${parseFloat(price.toString()).toString()}`}
              </p>
            </div>
          </div>

          <div
            className="mt-10 p-4"
            style={{ width: "100%", height: "45dvh", margin: "0 auto" }}
          >
            <Line data={chartData} options={{ responsive: true}} />
          </div>
        </div>
      </div>
    </div>
  );
}
