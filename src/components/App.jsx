import React from 'react'
import { Layout } from 'antd'

import TodoFooter from './TodoFooter'
import logo from '../logo.svg'
import './App.css'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const { Header, Footer, Sider, Content } = Layout


const App = () => (
	 <Layout>
      <Header>
        <h1>Welcome to Muses Piazza</h1>
      </Header>
        <Content>
        	      <AddTodo />
                <VisibleTodoList />
        </Content>
      <Footer>
      	    <TodoFooter />
      </Footer>
    </Layout>
)

export default App
