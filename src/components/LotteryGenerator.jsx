import React, { useState } from "react";

const LotteryGenerator = ({ setLotteryNumbers }) => {
  const [lotteryNumbers, setLocalLotteryNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 4; i++) {
      newNumbers.push(Math.floor(100 + Math.random() * 900));
    }
    setLocalLotteryNumbers(newNumbers);
    setLotteryNumbers(newNumbers);
  };

  const safeValue = (value) =>
    Number.isNaN(value) || value === undefined || value === null ? "" : value;

  const firstPrice = lotteryNumbers[0];
  const closeToFirstPrice = firstPrice ? firstPrice + 1 : "";
  const closeToFirstPrice2 = firstPrice ? firstPrice - 1 : "";

  return (
    <div>
      <div className="w-full">
        <div className="text-lg py-6 flex justify-center text-center">
          ผลการออกรางวัลล็อตเตอรี่ Diversition Exhibition
        </div>
        <div className="flex justify-center pb-6">
          <button
            onClick={generateNumbers}
            className="relative px-6 py-2 rounded-md bg-white z-10 border-2 border-[#f2812d] before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#f2812d] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
          >
            ดำเนินการสุ่มรางวัล
          </button>
        </div>
      </div>
      <div className="bg-[#f5f5f5]text-lg w-full flex flex-wrap justify-between px-4">
        <div className="flex flex-col items-center w-full mb-4">
          <div className="bg-[#f8b25c] rounded-lg px-2 py-2">รางวัลที่ 1</div>
          <div className="text-4xl font-semibold py-4 text-center">
            {safeValue(firstPrice)}
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-4">
          <div className="bg-[#f8b25c] rounded-lg px-2 py-2">
            รางวัลเลขข้างเคียงรางวัลที่ 1
          </div>
          <div className="text-4xl font-semibold py-4 flex flex-row justify-between gap-5">
            <div>{safeValue(closeToFirstPrice)}</div>
            <div>{safeValue(closeToFirstPrice2)}</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-4">
          <div className="bg-[#f8b25c] rounded-lg px-2 py-2">รางวัลที่ 2</div>
          <div className="text-4xl font-semibold py-4 flex flex-row justify-between gap-5">
            <div>{safeValue(lotteryNumbers[1])}</div>
            <div>{safeValue(lotteryNumbers[2])}</div>
            <div>{safeValue(lotteryNumbers[3])}</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-4">
          <div className="bg-[#f8b25c] rounded-lg px-2 py-2">
            รางวัลเลขท้าย 2 ตัว
          </div>
          <div className="text-4xl font-semibold py-4">
            {safeValue(firstPrice ? firstPrice.toString().slice(-2) : "")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryGenerator;
