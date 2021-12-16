import React, {useState} from 'react'

export const X = 'x';
export const O = 'o';
export const _ = ' ';

const INITIAL_BOARD = "         ";
// board parseado em array
// boardList = ['X', '', '', '', '', '', '', '', ''];
export const play = board => {
    //parseia o board para um array
    const boardList = board.split('');
    // define próx. jogada de O.
    const newBoard = getCircleMove(boardList);
    // retorna board com a jogada de O.
    return newBoard.join('');
}

export const getCircleMove = boardList => {
    const pos = 1//Math.max(9);
    return boardList.map((square, i) => i === pos ? O : square);
}

export const Board = () => {

    const [board, setBoard] = useState(INITIAL_BOARD);
    return (
        <div>
            
        </div>
    )
}
