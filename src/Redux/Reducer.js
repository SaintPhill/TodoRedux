import {FILTER_VALUES} from "./Actions";

const initState = {
    lastGeneratedId: 0,
    todos: [],
    filter: FILTER_VALUES.ALL
};

function todoActions(state = [], action) {
    switch (action.type) {
        case 'DEL_TODO':
            return state.filter((el) => el.id !== action.payload.id);

        case 'TOGGLE_TODO':
            return state.map((todo) => {
                    return {...todo, complete: todo.id === action.payload.id ? !todo.complete : todo.complete}
            });

        case 'EDIT_TODO':
            return state.map((todo) => {
                   return {...todo, edit: todo.id === action.payload.id ? !todo.edit : todo.edit}
            });

        case 'HANDLE_TODO':
            return state.map(todo => {
                return {...todo, text: todo.id === action.payload.id ? action.payload.text : todo.text}
            });

        default:
            return state
    }
}

function addTodo(state = {}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newId = state.lastGeneratedId + 1;
            return {
                ...state,
                lastGeneratedId: newId,
                todos: [...state.todos, {
                    text: action.payload.text,
                    edit: false,
                    complete: false,
                    id: newId
                }]
            };
        case 'FILTER_TODO':
            return {...state, filter: action.payload.text};

        default:
            return state
    }
}


function todoReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TODO':
        case 'FILTER_TODO':
            return addTodo(state, action);

        case 'DEL_TODO':
        case 'TOGGLE_TODO':
        case 'EDIT_TODO':
        case 'HANDLE_TODO': {
            return {...state, todos: todoActions(state.todos, action)}
        }

        default:
            return state;
    }
}

export default todoReducer