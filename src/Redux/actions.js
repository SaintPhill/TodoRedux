export const Actions = {
    ADD_TODO: 'ADD_TODO',
    DEL_TODO: 'DEL_TODO',
    FILTER_TODO: 'FILTER_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    HANDLE_TODO: 'HANDLE_TODO',
    SHOW_BAR: 'SHOW_BAR'
};

export const FILTER_VALUES = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
};

let todoId = 0;



export const addTodo = (text) => {
    return {
        type: Actions.ADD_TODO,
        payload: {
            text,
            id: todoId++
        }
    }
};

export const delTodo = id => {
    return {
        type: Actions.DEL_TODO,
        payload: {
            id
        }
    }
};

export const filterTodo = (text) => {
    return {
        type: Actions.FILTER_TODO,
        payload: {
            text
        }
    }
};

export const toggleTodo = (id) => {
    return {
        type: Actions.TOGGLE_TODO,
        payload: {
            id
        }
    }
};

export const editTodo = (id) => {
    return {
        type: Actions.EDIT_TODO,
        payload: {
            id
        }
    }
};

export const handleTodo = (id, text) => {
    return {
        type: Actions.HANDLE_TODO,
        payload: {
            id,
            text
        }
    }
};