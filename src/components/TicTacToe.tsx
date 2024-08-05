'use client'

import { useEffect, useState } from "react";

const TicTacToe = () => {
    const Square = ({ value, onClick }: { value: string, onClick: () => void }) => {
        return (
            <button 
                className="border border-red-100 border-solid text-4xl text-center h-24 w-24 p-0 -mt-1 -mr-1 cursor-pointer" 
                onClick={onClick}
            >
                {value}
            </button>
        );
    };

    const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [status, setStatus] = useState<string>('');
    const [disableBoard, setDisableBoard] = useState<boolean>(false);

    const resetBoard = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setStatus('');
        setDisableBoard(false);
    };

    const calculateWinner = (squares: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [x, y, z] = lines[i];
            if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
                return squares[x];
            }
        }
        return null;
    };

    const handleClick = (i: number) => {
        const squaresCopy = [...squares];
        // if winner is already decided or square is already filled, return early so can't make changes or click anymore.
        if (calculateWinner(squares) || squaresCopy[i]) return;
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
            setDisableBoard(true);
            setStatus(`Winner is ${winner}`);
        } else if (squares.every((square) => square !== null)) {
            setDisableBoard(true);
            setStatus("It's a draw");
        } else {
            setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
        }
    }, [squares, xIsNext]);

    return (
        <div className="clear-both content-none p-2 m-2 flex flex-col items-center justify-center" style={disableBoard ? {backgroundColor: 'grey' } : {backgroundColor: 'white'}}>
            <div className="flex">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <p>{status}</p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={resetBoard}>Restart</button>
        </div>
    );
};

export default TicTacToe;


/*
::after
clear: both;
content: "";
display: table;
*/