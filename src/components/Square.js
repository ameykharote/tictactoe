import React from 'react';

export default function Square(props) {
    
    const ChooseValue = (value) => {
        
        if(value === "X") {
            return {color: "#0080ff"}
        } else {
            return {color: "#ffb366"}
        }
    }

    return (
        <button className = "square" onClick = {props.onClick} style = {ChooseValue(props.value)}>
            {props.value}
        </button>
    );
    
}