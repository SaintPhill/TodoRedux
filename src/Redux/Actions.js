export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    DEL_TODO: 'DEL_TODO',
    FILTER_TODO: 'FILTER_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    HANDLE_TODO: 'HANDLE_TODO'
};

export const FILTER_VALUES = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
};

export const addTodo = (text) => {
    return {
        type: ACTIONS.ADD_TODO,
        payload: {
            text
        }
    }
};

export const delTodo = id => {
    return {
        type: ACTIONS.DEL_TODO,
        payload: {
            id
        }
    }
};

export const filterTodo = (text) => {
    return {
        type: ACTIONS.FILTER_TODO,
        payload: {
            text
        }
    }
};

export const toggleTodo = (id) => {
    return {
        type: ACTIONS.TOGGLE_TODO,
        payload: {
            id
        }
    }
};

export const editTodo = (id) => {
    return {
        type: ACTIONS.EDIT_TODO,
        payload: {
            id
        }
    }
};

export const handleTodo = (id, text) => {
    return {
        type: ACTIONS.HANDLE_TODO,
        payload: {
            id,
            text
        }
    }
};