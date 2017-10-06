import React from 'react'
import { Card } from 'antd'
import Todo from './Todo'

const TodoList = ({ todos, count,isIncrementing,onTodoClick ,changePage,increment,incrementAsync}) => (

	<Card>
	    {todos.map(todo =>
	      <Todo
	        key={todo.id}
	        {...todo}
	        onClick={() => onTodoClick(todo.id)}
	      />
	    )}

	   <p><button onClick={() => changePage()}>Go to about page via redux</button></p>

    
    <p>Count: {count}</p>

	<p>
      <button onClick={increment} disabled={isIncrementing}>Increment</button>
      <button onClick={incrementAsync} disabled={isIncrementing}>Increment Async</button>
    </p>

	</Card>
)


export default TodoList
