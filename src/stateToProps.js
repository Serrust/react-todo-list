const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        todoList: state.items.filter(item => item.completed === false),
        completedList: state.items.filter(item => item.completed === true),
    }
}

export default stateToProps