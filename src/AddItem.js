import React from 'react';
import {connect} from 'react-redux'
import stateToProps from './stateToProps'
import dispatchToProps from './dispatchToProps'
import styling from './style.module.css'

const AddItem = (props) => {

    let { inputValue, handleInputChange, addItem } = props

    return (
        <div className={styling.container}>
            <label htmlFor = "new-task">ADD ITEM</label>
            <input 
                id={styling["new-task"]}
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChange}
            />
            <button
                onClick = {addItem}
            >Add</button>
        </div>
    )
}

export default connect(stateToProps, dispatchToProps) (AddItem);