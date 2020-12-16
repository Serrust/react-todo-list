import { v4 as uuidv4 } from 'uuid';

const initialState = {
    inputValue: '',
    items: [
        {
            id: uuidv4(),
            value: 'Pay Bills',
            completed: false,
            isEditing: false
        },
        {
            id: uuidv4(),
            value: 'Go Shopping',
            completed: false,
            isEditing: true
        },
        {
            id: uuidv4(),
            value: 'See the Doctor',
            completed: true,
            isEditing: false
        }
    ]
}

const appReducer = (state = initialState, action) => {
    
    // adding a new item
    if (action.type === 'input_change') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    // click add-item button
    if (action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        let item = {
            id: uuidv4(),
            value: state.inputValue,
            completed: false,
            isEditing: false
        }
        newState.items.push(item)
        newState.inputValue = ''
        return newState
    }
    // click checkbox
    if (action.type === 'edit_completed_status') {
        let newState = JSON.parse(JSON.stringify(state))
        let itemIndex = newState.items.findIndex(item => item.id === action.item.id)
        newState.items[itemIndex].completed = !newState.items[itemIndex].completed
        return newState
    }
    // editing list item input
    if (action.type === 'change_list_item_value') {
        let newState = JSON.parse(JSON.stringify(state))
        let itemIndex = newState.items.findIndex(item => item.id === action.item.id)
        // console.log('the index of the current item is: ' + itemIndex)
        newState.items[itemIndex].value = action.value
        return newState
    }
    // click edit button
    if (action.type === 'change_editing_status') {
        let newState = JSON.parse(JSON.stringify(state))
        let itemIndex = newState.items.findIndex(item => item.id === action.item.id)
        newState.items[itemIndex].isEditing = !newState.items[itemIndex].isEditing
        return newState
    }
    // click delete button
    if (action.type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state))
        let itemIndex = newState.items.findIndex(item => item.id === action.item.id)
        newState.items.splice(itemIndex, 1)
        return newState
    }

    return state
}

export default appReducer