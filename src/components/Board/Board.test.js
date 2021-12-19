import {play, validateInitialBoard, X, O, _, getIsFirstMove, boardToArray, validateBoard} from './';
describe('Board Tests', () => {

    test('1. it should return a Board with X at position [8] and O at position [1]', () => {
        const board = '         ';
        const posX = 8;
        const newBoard = play(board, posX, false);
        const expectedBoard = ' o      x';
        expect(newBoard).toBe(expectedBoard);
    });

    test('2. it should return the Board with X at position [7]', () => {
        const board = '         ';
        const posX = 7;
        const isRandom = true;

        const newBoard = play(board, posX, isRandom);
        const item = boardToArray(newBoard)[posX];
        expect(item).toBe(X);
    });

    test('3. it should verify that the X has made only One move', () => {
        const board = ' x       ';
        const boardList = boardToArray(board);
        const isFirstMove = getIsFirstMove(boardList);
        expect(isFirstMove).toBe(true);
    });


    test('4. it should pass as a Not First Move', () => {
        const board = ' x o x   ';
        const boardList = boardToArray(board);
        const isFirstMove = getIsFirstMove(boardList);
        expect(isFirstMove).toBe(false);
    });

    test('5. it should pass as a Not First Move', () => {
        const board = ' x     xo';
        const boardList = boardToArray(board);
        const isFirstMove = getIsFirstMove(boardList);
        expect(isFirstMove).toBe(false);
    });

    test('6. it should validate the Board', () => {
        const board = 'x   o  x ';
        const isValid = validateBoard(board);
        expect(isValid).toBe(true);
    });

    test('7. it should validate the Board', () => {
        const board = 'xo  ox x ';
        const isValid = validateBoard(board);
        expect(isValid).toBe(true);
    });

    test('8. it should invalidate the Board because of X quantity', () => {
        const board = 'x   ox x ';
        const isValid = validateBoard(board);
        expect(isValid).toBe(false);
    });

    test('9. it should invalidate the Board because of O quantity', () => {
        const board = 'x   oxoxo';
        const isValid = validateBoard(board);
        expect(isValid).toBe(false);
    });

    test('10. it should validate the Initial Boards', () => {
        const board1 = 'x   o    ';
        const board2 = 'x   o  xo';
        const board3 = 'xx  oo   ';
        //validate initial board
        const isInitialBoard1Valid = validateInitialBoard(board1);
        expect(isInitialBoard1Valid).toBe(true);
        const isInitialBoard2Valid = validateInitialBoard(board2);
        expect(isInitialBoard2Valid).toBe(true);
        const isInitialBoard3Valid = validateInitialBoard(board3);
        expect(isInitialBoard3Valid).toBe(true);
    });


    test('11. it should invalidate the Initial Boards', () => {
        const board1 = 'x   o   x';
        const board2 = '    o    ';
        const board3 = 'x  xoooxx';
        //validate initial board
        const isInitialBoard1Valid = validateInitialBoard(board1);
        expect(isInitialBoard1Valid).toBe(false);
        const isInitialBoard2Valid = validateInitialBoard(board2);
        expect(isInitialBoard2Valid).toBe(false);
        const isInitialBoard3Valid = validateInitialBoard(board3);
        expect(isInitialBoard3Valid).toBe(false);
    });

/*
- Board é recebido como string
- 
*/
});