import React from 'react';
import {connect} from 'react-redux'
import stateToProps from './stateToProps'
import dispatchToProps from './dispatchToProps'
import styling from './style.module.css'

const TodoList = (props) => {

    let { todoList, handleListItemCompletedStatusChange, handleListItemInputValueChange, handleListItemEditingStatusChange, deleteItem } = props

    return (
        <div className = {styling.container} >
            <h3>TODO</h3>
            <ul id = {styling["incomplete-tasks"]}>
                {
                    todoList.map((item) => {
                        return (
                            <li 
                                key = {item.id} 
                                className={ item.isEditing ? styling.editMode:'' }
                            >
                                <input 
                                    type = 'checkbox'
                                    defaultChecked = {item.completed}
                                    onClick = {() => (handleListItemCompletedStatusChange(item))}
                                />
                                {
                                    item.isEditing ? 
                                    <input 
                                        type = 'text'
                                        value = {item.value}
                                        onChange = {(event) => handleListItemInputValueChange(event, item)}
                                    /> :
                                    <label>{item.value}</label>
                                }
                                <button
                                    className={styling.edit} 
                                    onClick = {() => handleListItemEditingStatusChange(item)}
                                >Edit</button>
                                <button
                                    className={styling.delete} 
                                    onClick = {() => deleteItem(item)}
                                >Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
    </div>
    )
}

export default connect(stateToProps, dispatchToProps) (TodoList);