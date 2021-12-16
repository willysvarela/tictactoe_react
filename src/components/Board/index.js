import React, {useState} from 'react'

export const X = 'x';
export const O = 'o';
export const _ = ' ';

const INITIAL_BOARD = "         ";
// board parseado em array
// boardList = ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

export const play = (board, posX) => {
    const newBoard = playXMove(board, posX);
    return playCircleMove(newBoard);
}

export const boardToArray = board => {
    return board.split('');
}

export const playCircleMove = (board) => {
    //parseia o board para um array
    const boardList = board.split('');
    // define próx. jogada de O.
    const newBoard = getCircleMove(boardList);
    // retorna board com a jogada de O.
    return newBoard.join('');
}

export const playXMove = (board, pos) => {
    const boardList = board.split('');
    const newBoard = getXMove(boardList, pos);
    return newBoard.join('');
}

export const getXMove = (boardList, pos) => {
    return boardList.map((item, i) => i === pos ? X : item);
}

export const getCircleMove = boardList => {
    const pos = processCircleMove(boardList);
    return boardList.map((item, i) => i === pos ? O : item);
}

const CORNERS = [0, 2, 6, 8];
const EDGES = [1, 3, 5, 7];
const CENTER = 4;

export const processCircleMove = boardList => {
    let pos = 1;
    //função que retorna a estratégia a ser utilizada, e qual a prox. jogada a ser feita (primeira, segunda, etc.). 
    const isFirstMove = getIsFirstMove(boardList);
    if (isFirstMove) {
        //pegando a posição do X
        const posX = boardList.findIndex(item => item === X);
        //primeira jogada no CORNER
        if (CORNERS.includes(posX)) {
            return CENTER;
        }
        //primeira jogada na BORDA/EDGE
        if (EDGES.includes(posX)) {
            
        } else {
            //primeira jogada no CENTER

        }
    }
    return pos;
}

export const getIsFirstMove = (boardList) => {
    return boardList.filter(item => item !== _).length === 1
}

export const Board = () => {
    const [board, setBoard] = useState(INITIAL_BOARD);
    return (
        <div>

        </div>
    )
}
