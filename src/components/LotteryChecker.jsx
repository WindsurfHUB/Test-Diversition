import React, { useState } from "react";
import Confetti from "react-confetti";

const LotteryChecker = ({ lotteryNumbers }) => {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const firstPrice = lotteryNumbers[0];
  const closeToFirstPrice = firstPrice ? firstPrice + 1 : "";
  const closeToFirstPrice2 = firstPrice ? firstPrice - 1 : "";
  const secondPrices = lotteryNumbers.slice(1, 4);
  const lastTwoDigits = firstPrice ? firstPrice.toString().slice(-2) : "";

  const checkNumber = () => {
    const input = parseInt(inputNumber);
    const screenWidth = window.innerWidth;
  
    if (input === firstPrice) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลที่ 1 และรางวัลเลขท้าย 2 ตัว");
      setShowConfetti(true);
      if (screenWidth <= 640) {
        alert("ยินดีด้วย! คุณถูกรางวัลที่ 1 และรางวัลเลขท้าย 2 ตัว");
      }
      setTimeout(() => setShowConfetti(false), 3000);
    } else if (input === closeToFirstPrice || input === closeToFirstPrice2) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลเลขข้างเคียงรางวัลที่ 1");
      if (screenWidth <= 640) {
        alert("ยินดีด้วย! คุณถูกรางวัลเลขข้างเคียงรางวัลที่ 1");
      }
    } else if (secondPrices.includes(input)) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลที่ 2");
      if (screenWidth <= 640) {
        alert("ยินดีด้วย! คุณถูกรางวัลที่ 2");
      }
    } else if (input.toString().slice(-2) === lastTwoDigits) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลเลขท้าย 2 ตัว");
      if (screenWidth <= 640) {
        alert("ยินดีด้วย! คุณถูกรางวัลเลขท้าย 2 ตัว");
      }
    } else {
      setResult("ไม่ถูกรางวัล");
      if (screenWidth < 640) {
        alert("ไม่ถูกรางวัล");
      }
    }
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="w-full px-4">
      <div className="flex justify-center items-center gap-4">
        <input
          className="border-2 border-[#f2812d] px-3 py-2 rounded-md w-full sm:w-1/3 lg:w-1/5"
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="กรอกหมายเลข"
        />

        <button
          className="relative px-6 py-2 rounded-md bg-white z-10 border-2 border-[#f2812d] before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#f2812d] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
          onClick={checkNumber}
        >
          ตรวจรางวัล
        </button>
      </div>

      {result && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">
            {result.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      )}
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default LotteryChecker;
