import React from 'react'
import { connect } from 'react-redux'
import { Form,Input,Button } from 'antd';
import { addTodo } from '../actions'

const FormItem = Form.Item;

let AddTodo = ({ dispatch }) => {

  let input
  
  return (
    <div>
      <Form layout="inline" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <FormItem>
        <Button type="primary"  htmlType="submit">
          Add Todo
        </Button>
        </FormItem>
      </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
