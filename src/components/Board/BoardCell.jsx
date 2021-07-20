import React from 'react';
import { BoardCellConatiner } from './Board.styled';

export const BoardCell = ({number, cubeClicked, isCrosses}) => {
    const [active, setActive] = React.useState(false);
    const [cubeIsCrosses, setCubeIsCrosses] = React.useState(false);
    const [count, setCount] = React.useState(0);

    const clickHandler = () => {
        if(!active){
            cubeClicked(number, "CLICKED");
        }
        setActive(!active);
        setCubeIsCrosses(isCrosses);
        setCount(active ? count:count +1);
        console.log(`Cell number ${number} was pressed`)
    };
    
const color = () => {
    if (!active){
        return 'white'
    }
    if (active && cubeIsCrosses){
        return 'DarkGoldenRod'
    }
    return 'silver'
}

    return <BoardCellConatiner color = {color()} onClick={clickHandler}>
        {active && <span>{cubeIsCrosses ? "X" : "0"}</span>}
    </BoardCellConatiner>
}; 