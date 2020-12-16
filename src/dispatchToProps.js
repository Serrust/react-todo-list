const dispatchToProps = (dispatch) => {
    return {
        handleInputChange (event) {
            let action = {
                type: 'input_change',
                value: event.target.value
            }
            dispatch(action)
        },
        addItem () {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        handleListItemCompletedStatusChange (item) {
            let action = {
                type: 'edit_completed_status',
                item
            }
            dispatch(action)
        },
        handleListItemInputValueChange (event, item) {
            // console.log(event.target.value)
            let action = {
                type: 'change_list_item_value',
                value: event.target.value,
                item
            }
            dispatch(action)
        },
        handleListItemEditingStatusChange (item) {
            let action = {
                type: 'change_editing_status',
                item
            }
            dispatch(action)
        },
        deleteItem (item) {
            let action = {
                type: 'delete_item',
                item
            }
            dispatch(action)
        }
    }
}

export default dispatchToProps