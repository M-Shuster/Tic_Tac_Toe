import React from 'react';

import { BoardCell } from "./BoardCell";
import {BoardContainer} from "./Board.styled"
import { startNewGame } from "./BoardResetButton";

const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const Board = () => {
    const [toggleCrosses, setToggleCrosses] = React.useState(true);

    const cubeClickedHandler = (number, string) => {
        console.log('Triggered on board level', number,string);
        setToggleCrosses(!toggleCrosses);
    };

    return (
        <div>
        <div>{`Next turn is ${toggleCrosses ? "Crosses" : "Noughts"}`}</div>
        <BoardContainer>
         {numberArray.map((number) => (
            <BoardCell 
                isCrosses = {toggleCrosses}
                key={number} 
                number={number} 
                cubeClicked ={cubeClickedHandler} 
            />
        ))}
        </BoardContainer>
        <button>Start New Game</button>
        </div>
);
}; 