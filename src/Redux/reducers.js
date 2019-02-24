import {Actions, FILTER_VALUES} from "./actions";
import {combineReducers} from "redux";




function todoActions(state = [], action) {
    switch (action.type) {
        case Actions.ADD_TODO:
            return action.payload.text.length > 0 ? [
                ...state,
                {
                    text: action.payload.text,
                    edit: false,
                    complete: false,
                    id: action.payload.id
                }
            ] : state;

        case Actions.DEL_TODO:
            return state.filter((el) => el.id !== action.payload.id);

        case Actions.TOGGLE_TODO:
            return state.map((todo) => {
                    return {...todo, complete: todo.id === action.payload.id ? !todo.complete : todo.complete}
            });

        case Actions.EDIT_TODO:
            return state.map((todo) => {
                   return {...todo, edit: todo.id === action.payload.id ? !todo.edit : todo.edit}
            });

        case Actions.HANDLE_TODO:
            return state.map(todo => {
                return {...todo, text: todo.id === action.payload.id ? action.payload.text : todo.text}
            });

        default:
            return state
    }
}

function filterTodo(state = FILTER_VALUES.ALL, action) {
    switch (action.type) {

        case Actions.FILTER_TODO:
            return action.payload.text;

        default:
            return state
    }
}



let rootState = combineReducers({
    todoActions,
    filterTodo
});

export default rootState