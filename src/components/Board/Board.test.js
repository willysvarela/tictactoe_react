import {play, getCircleMove, X, O, _} from './';

test('return a correct board with O at position [1]', () => {
    const board = '        x';
    const newBoard = play(board);
    const expectedBoard = ' o      x';
    expect(newBoard).toBe(expectedBoard);
});

