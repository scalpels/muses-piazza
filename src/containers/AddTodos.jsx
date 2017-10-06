import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { Form,Input,Button } from 'antd'
import { addTodo } from '../actions'

const FormItem = Form.Item

class BasicForms extends Component {


 componentDidMount() {
    const url = 'https://api.github.com/search/repositories?q=javascript&sort=stars'
   fetch(url).then(function(response) {
      return response.json()
      }).then(function(json) {
        console.log('parsed json', json['total_count'])
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })

  }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
                this.props.dispatch(addTodo(values.password))
            }
        })
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 14 },
            },
        }

        return (
         <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem
                    {...formItemLayout}
                    label="Todo"
                    hasFeedback
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>
            <FormItem>
            <Button type="primary"  htmlType="submit">
              Add Todo
            </Button>
            </FormItem>
      </Form>
          )
      }
}

const BasicForm = Form.create()(BasicForms);

const AddTodos = connect()(BasicForm)

export default AddTodos
