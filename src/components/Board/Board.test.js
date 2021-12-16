import {play, getCircleMove, X, O, _, getIsFirstMove, boardToArray} from './';

test('return a correct board with X at position 8 and O at position [1]', () => {
    const board = '         ';
    const posX = 8;
    const newBoard = play(board, posX);
    const expectedBoard = ' o      x';
    expect(newBoard).toBe(expectedBoard);
});

/*test('return example board', () => {
    const board = ' xxo  o  ';
    const posX = 8;
    const newBoard = play(board, posX);
    const expectedBoard = 'oxxo  o  ';
    console.log(newBoard);
    expect(newBoard).toBe(expectedBoard);
});*/


test('is first move TRUE', () => {
    const board = ' x       ';
    const boardList = boardToArray(board);
    const isFirstMove = getIsFirstMove(boardList);
    expect(isFirstMove).toBe(true);
});


test('is first move FALSE - 1', () => {
    const board = ' x o x   ';
    const boardList = boardToArray(board);
    const isFirstMove = getIsFirstMove(boardList);
    expect(isFirstMove).toBe(false);
});


test('is first move FALSE - 2', () => {
    const board = ' x     xo';
    const boardList = boardToArray(board);
    const isFirstMove = getIsFirstMove(boardList);
    expect(isFirstMove).toBe(false);
});

/*
- Board é recebido como string
- 
*/