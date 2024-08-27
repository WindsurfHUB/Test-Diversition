import React, { useState } from "react";

// LotteryChecker component checks if the input number matches any of the generated lottery numbers
const LotteryChecker = ({ lotteryNumbers }) => {
  // State to store the input number entered by the user
  const [inputNumber, setInputNumber] = useState("");

  // State to store the result message
  const [result, setResult] = useState("");

  // Function to check if the input number matches any of the generated lottery numbers
  const checkNumber = () => {
    // Convert the input number to an integer and check if it is included in the lotteryNumbers array
    if (lotteryNumbers.includes(parseInt(inputNumber))) {
      setResult("ถูกรางวัล!");
    } else {
      setResult("ไม่ถูกรางวัล");
    }
  };

  return (
    <div>
      {/* Input field for the user to enter their lottery number */}
      <input
      className="border border-gray-300"
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="กรอกหมายเลข" // Placeholder text for the input field
      />

      {/* Button to trigger the checkNumber function */}
      <button className="border border-gray-300" onClick={checkNumber}>ตรวจรางวัล</button>

      {/* Display the result message if available */}
      {result && <p>{result}</p>}
    </div>
  );
};

export default LotteryChecker;
