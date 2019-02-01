import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App";
import todoReducer from "./Redux/Reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

let store = createStore(todoReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

export default store



