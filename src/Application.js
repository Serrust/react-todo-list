import React from 'react';
import AddItem from './AddItem';
import CompletedList from './CompletedList';
import TodoList from './TodoList';

const Application = () => {
    return (
        <div>
            <AddItem />
            <TodoList />
            <CompletedList />
        </div>
    );
}

export default Application