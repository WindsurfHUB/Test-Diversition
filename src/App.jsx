import React from 'react';
import LotteryGenerator from './components/LotteryGenerator';
import LotteryChecker from './components/LotteryChecker';
import Header from './components/Header';
import "./index.css"

function App() {
  const [lotteryNumbers, setLotteryNumbers] = React.useState([]);

  return (
    <div>
      <Header />
      <LotteryGenerator setLotteryNumbers={setLotteryNumbers} />
      <LotteryChecker lotteryNumbers={lotteryNumbers} />
    </div>
  );
}

export default App;
