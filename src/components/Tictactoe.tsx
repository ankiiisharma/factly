import React, { useState } from "react";
import underline from "../assets/underline.svg";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard: string[]) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((cell) => cell)) {
      setWinner("Draw");
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 tracking-tighter">tic tac toe</h1>
      <img src={underline} className="w-[170px] mt-[-20px]" />

      <div className="grid grid-cols-3 gap-2 w-64 mt-8">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-20 h-20 flex items-center justify-center text-4xl font-bold cursor-pointer border-2 rounded-lg ${
              winner ? "cursor-not-allowed" : "cursor-pointer"
            } ${cell ? "bg-gray-200" : "bg-white"} ${
              winner && cell ? "text-green-500" : "text-gray-800"
            }`}
          >
            {cell}
          </div>
        ))}
      </div>

      <div className="mt-6">
        {winner ? (
          <h2 className="text-2xl font-semibold">
            {winner === "Draw" ? "It's a Draw!" : `${winner} is the winner`}
          </h2>
        ) : (
          <h2 className="text-2xl tracking-tighter font-semibold">
            {isXNext ? "X" : "O"}, its your turn!
          </h2>
        )}
      </div>

      <button
        onClick={resetGame}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-semibold"
      >
        Reset Game!
      </button>
    </div>
  );
};

export default TicTacToe;
