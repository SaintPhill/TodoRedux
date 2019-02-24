import React from 'react'
import StateBar from "../containers/StateBar";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => {
  return (
      <div style={{width: '50%', margin: '0 auto'}}>
          <StateBar />
          <VisibleTodoList />
          <AddTodo />
      </div>
  )
};

export default App
