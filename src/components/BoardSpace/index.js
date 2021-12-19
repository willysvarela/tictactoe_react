import React from 'react'
import { X, O, _ } from './../Board/';
export const BoardSpace = ({item, index, onClick}) => {

    const handleClick = () => {
        onClick(index);
    }
    return (
        <div onClick={handleClick} style={{backgroundColor: 'red'}}>
            {item === X ? X : item === O ? O : _ }
        </div>
    )
}
