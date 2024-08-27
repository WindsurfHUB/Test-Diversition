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
      <div className="w-screen">
        <div className="py-8 flex justify-center text-1xl">
          ผลการออกรางวัลล็อตเตอรี่ Diversition Exhibition
        </div>
        <div className="flex justify-center pb-8">
          <button
            onClick={generateNumbers}
            className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-amber-500 before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-amber-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
          >
            ดำเนินการสุ่มรางวัล
          </button>
        </div>
      </div>
      {/* first price : 1 */}
      {/* second price : 3 */}
      {/* close to first price : 2 */}
      {/* last two digit : 10 */}
      <border className="w-screen flex px-[100px] justify-between flex-row">
        <div className="flex items-center flex-col">
          <div>รางวัลที่ 1</div>
          <div className="py-2">
            <div>{safeValue(firstPrice)}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>รางวัลเลขข้างเคียงรางวัลที่ 1</div>
          <div className="py-2 px-10 flex flex-row justify-between">
            <div>{safeValue(closeToFirstPrice)}</div>
            <div>{safeValue(closeToFirstPrice2)}</div>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div>รางวัลที่ 2</div>
          <div className="py-2 flex flex-row justify-between gap-5">
            <div>{safeValue(lotteryNumbers[1])}</div>
            <div>{safeValue(lotteryNumbers[2])}</div>
            <div>{safeValue(lotteryNumbers[3])}</div>
          </div>
        </div>
        <div className="flex items-center flex-col">
          รางวัลเลขท้าย 2 ตัว
          <div className="py-2">
            {safeValue(firstPrice ? firstPrice.toString().slice(-2) : "")}
          </div>
        </div>
      </border>
    </>
  );
};

export default LotteryGenerator;
