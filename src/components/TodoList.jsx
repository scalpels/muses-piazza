import React from 'react'
import { Card } from 'antd'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (

	<Card>
	    {todos.map(todo =>
	      <Todo
	        key={todo.id}
	        {...todo}
	        onClick={() => onTodoClick(todo.id)}
	      />
	    )}
	</Card>
)


export default TodoList
