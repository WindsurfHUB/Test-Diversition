import React, { useState } from "react";

const LotteryGenerator = ({ setLotteryNumbers }) => {
  const [lotteryNumbers, setLocalLotteryNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = [];
    // Generate 4 sets of 3-digit numbers for prizes
    for (let i = 0; i < 4; i++) {
      newNumbers.push(Math.floor(100 + Math.random() * 900)); // Set random numbers for the prizes
    }
    setLocalLotteryNumbers(newNumbers);
    setLotteryNumbers(newNumbers);
  };

  // Helper function to safely get a value or return an empty string
  const safeValue = (value) =>
    Number.isNaN(value) || value === undefined || value === null ? "" : value;

  const firstPrice = lotteryNumbers[0];
  const closeToFirstPrice = firstPrice ? firstPrice + 1 : "";
  const closeToFirstPrice2 = firstPrice ? firstPrice - 1 : "";

  return (
    <>
      <div className="w-full">
        <div className="py-8 flex justify-center text-lg md:text-xl text-center">
          ผลการออกรางวัลล็อตเตอรี่ Diversition Exhibition
        </div>
        <div className="flex justify-center pb-8">
          <button
            onClick={generateNumbers}
            className="relative px-8 py-2 rounded-md bg-white z-10 border-2 border-amber-500 before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-amber-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
          >
            ดำเนินการสุ่มรางวัล
          </button>
        </div>
      </div>
      {/* Lottery result section */}
      <div className="w-full flex flex-wrap justify-between px-4 sm:px-12 md:px-20 lg:px-32">
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
          <div>รางวัลที่ 1</div>
          <div className="py-2 text-center">{safeValue(firstPrice)}</div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
          <div>รางวัลเลขข้างเคียงรางวัลที่ 1</div>
          <div className="py-2 flex flex-row justify-between gap-5">
            <div>{safeValue(closeToFirstPrice)}</div>
            <div>{safeValue(closeToFirstPrice2)}</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
          <div>รางวัลที่ 2</div>
          <div className="py-2 flex flex-row justify-between gap-5">
            <div>{safeValue(lotteryNumbers[1])}</div>
            <div>{safeValue(lotteryNumbers[2])}</div>
            <div>{safeValue(lotteryNumbers[3])}</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 mb-4">
          <div>รางวัลเลขท้าย 2 ตัว</div>
          <div className="py-2">
            {safeValue(firstPrice ? firstPrice.toString().slice(-2) : "")}
          </div>
        </div>
      </div>
    </>
  );
};

export default LotteryGenerator;
