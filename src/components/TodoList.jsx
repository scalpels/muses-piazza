import React from 'react'
import { Card } from 'antd'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick ,changePage}) => (

	<Card>
	    {todos.map(todo =>
	      <Todo
	        key={todo.id}
	        {...todo}
	        onClick={() => onTodoClick(todo.id)}
	      />
	    )}

	   <p><button onClick={() => changePage()}>Go to about page via redux</button></p>
	</Card>
)


export default TodoList
