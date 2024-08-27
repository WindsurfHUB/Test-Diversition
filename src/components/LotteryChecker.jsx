import React, { useState } from "react";

// LotteryChecker component checks if the input number matches any of the generated lottery numbers
const LotteryChecker = ({ lotteryNumbers }) => {
  // State to store the input number entered by the user
  const [inputNumber, setInputNumber] = useState("");

  // State to store the result message
  const [result, setResult] = useState("");

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
      setResult("ถูกรางวัลที่ 1 !!!");
    } else if (input === closeToFirstPrice || input === closeToFirstPrice2) {
      setResult("ถูกรางวัลเลขข้างเคียงรางวัลที่ 1 !!");
    } else if (secondPrices.includes(input)) {
      setResult("ถูกรางวัลที่ 2 !");
    } else if (input.toString().slice(-2) === lastTwoDigits) {
      setResult("ถูกรางวัลเลขท้าย 2 ตัว~!");
    } else {
      setResult("ไม่ถูกรางวัล");
    }
  };

  return (
    <div className="w-full px-4 sm:px-12 md:px-20 lg:px-32">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Input field for the user to enter their lottery number */}
        <input
          className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-auto"
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="กรอกหมายเลข" // Placeholder text for the input field
        />

        {/* Button to trigger the checkNumber function */}
        <button
          className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-auto"
          onClick={checkNumber}
        >
          ตรวจรางวัล
        </button>
      </div>

      {/* Display the result message if available */}
      {result && (
        <div className="mt-4 text-center">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default LotteryChecker;
