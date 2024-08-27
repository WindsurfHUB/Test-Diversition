import React, { useState } from "react";
import Confetti from "react-confetti";

// LotteryChecker component checks if the input number matches any of the generated lottery numbers
const LotteryChecker = ({ lotteryNumbers }) => {
  // State to store the input number entered by the user
  const [inputNumber, setInputNumber] = useState("");

  // State to store the result message
  const [result, setResult] = useState("");

  const [showConfetti, setShowConfetti] = useState(false);

  // Extract the relevant lottery numbers for comparison
  const firstPrice = lotteryNumbers[0];
  const closeToFirstPrice = firstPrice ? firstPrice + 1 : "";
  const closeToFirstPrice2 = firstPrice ? firstPrice - 1 : "";
  const secondPrices = lotteryNumbers.slice(1, 4);
  const lastTwoDigits = firstPrice ? firstPrice.toString().slice(-2) : "";

  // Function to check if the input number matches any of the generated lottery numbers
  const checkNumber = () => {
    const input = parseInt(inputNumber);

    if (input === firstPrice) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลที่ 1 และรางวัลเลขท้าย 2 ตัว");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else if (input === closeToFirstPrice || input === closeToFirstPrice2) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลเลขข้างเคียงรางวัลที่ 1");
    } else if (secondPrices.includes(input)) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลที่ 2");
    } else if (input.toString().slice(-2) === lastTwoDigits) {
      setResult("ยินดีด้วย\nคุณถูกรางวัลเลขท้าย 2 ตัว");
    } else {
      setResult("ไม่ถูกรางวัล");
    }
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="w-full px-4 sm:px-12 md:px-20 lg:px-32">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Input field for the user to enter their lottery number */}
        <input
          className="border border-2 border-[#f2812d] px-4 py-2 rounded-md w-full sm:w-auto"
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="กรอกหมายเลข" // Placeholder text for the input field
        />

        {/* Button to trigger the checkNumber function */}
        <button
          className="relative px-8 py-2 rounded-md bg-white z-10 border-2 border-[#f2812d] before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#f2812d] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
          onClick={checkNumber}
        >
          ตรวจรางวัล
        </button>
      </div>

      {/* Display the result message if available */}
      {result && (
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold">
            {result.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br /> {/* Line break */}
              </React.Fragment>
            ))}
          </p>
        </div>
      )}
      {/* Confetti effect */}
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
};

export default LotteryChecker;
