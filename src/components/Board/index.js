import React, {useState, useEffect} from 'react'
import { BoardSpace } from '../BoardSpace';

export const X = 'x';
export const O = 'o';
export const _ = ' ';

const INITIAL_BOARD = "         ";
const BOARD_LENGTH = 9;
// boardList = ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

export const play = (board, posX, isRandom) => {
    const newBoard = playXMove(board, posX);
    const isValid = validateBoard(newBoard);
    if (isValid) {
        //erro
    }
    return isRandom ? playRandomCircleMove(newBoard) : playCircleMove(newBoard);
}

export const boardToArray = board => {
    return board.split('').map(item => item === ' ' ? _ : item);
}

export const validateBoard = (board) => {
    const boardList = boardToArray(board);
    const xPlays = boardList.filter(item => item === X).length;
    const oPlays = boardList.filter(item => item === O).length;

    const isValid = boardList.length === BOARD_LENGTH && oPlays === xPlays - 1;
    return isValid;
}

//main function that process Board
export const playCircleMove = (board) => {
    //parseia o board para um array
    const boardList = boardToArray(board);
    // define próx. jogada de O.
    const newBoard = getCircleMove(boardList);
    // retorna board com a jogada de O.
    return newBoard.join('');
}

export const playRandomCircleMove = (board) => {
    //parseia o board para um array
    const boardList = boardToArray(board);
    // define próx. jogada de O.
    const newBoard = getRandomCircleMove(boardList);
    // retorna board com a jogada de O.
    return newBoard.join('');
}

export const playXMove = (board, pos) => {
    const boardList = boardToArray(board);
    const newBoard = getXMove(boardList, pos);
    return newBoard.join('');
}

export const getXMove = (boardList, pos) => {
    return boardList.map((item, i) => i === pos ? X : item);
}

export const getCircleMove = boardList => {
    const pos = processCircleMove(boardList, false);
    return boardList.map((item, i) => i === pos ? O : item);
}

export const getRandomCircleMove = boardList => {
    const pos = processCircleMove(boardList, true);
    return boardList.map((item, i) => i === pos ? O : item);
}

const CORNERS = [0, 2, 6, 8];
const EDGES = [1, 3, 5, 7];
const CENTER = 4;

export const processCircleMove = (boardList, isRandom) => {
    let pos = 1;
    
    //função que retorna a estratégia a ser utilizada, e qual a prox. jogada a ser feita (primeira, segunda, etc.).

    //posicionar O em um campo vazio aleatório do board.
    let validPos = false;
    if(isRandom) {
        while (validPos === false) {
            pos = Math.floor(Math.random() * BOARD_LENGTH);
            validPos = boardList[pos] === _;
        }
    }
    return pos;

    /*const isFirstMove = getIsFirstMove(boardList);
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
            return CORNERS[0];
        }
    }*/
}

export const getIsFirstMove = (boardList) => {
    return boardList.filter(item => item !== _).length === 1
}

export const getURLBoard = () => {
    const board = new URLSearchParams(window.location.search).get('board');
    return board;
}

export const validateInitialBoard = board => {
    const boardList = boardToArray(board);
    const xPlays = boardList.filter(item => item === X).length;
    const oPlays = boardList.filter(item => item === O).length;

    const isValid = boardList.length === BOARD_LENGTH && oPlays === xPlays;
    return isValid;
}

export const Board = () => {
    const [board, setBoard] = useState(INITIAL_BOARD);

    useEffect(() => {
        const urlBoard = getURLBoard();
        if(urlBoard){
            setBoard(getURLBoard());
        }
    }, []);


    const handleClickBoardSpace = index => {
        setBoard(play(board, index, true));
    }

    return (
        <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
            {
                boardToArray(board).map((item, i) => <BoardSpace key={i} item={item} index={i} onClick={handleClickBoardSpace}/>)
            }
        </div>
    )
}
