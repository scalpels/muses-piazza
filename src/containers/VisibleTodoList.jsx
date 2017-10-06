import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import {
  increment,
  incrementAsync
} from '../reducers/counter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}





const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  onTodoClick: toggleTodo,
  changePage:() => push('/todo'),
  increment:increment,
  incrementAsync:incrementAsync
}, dispatch)


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
