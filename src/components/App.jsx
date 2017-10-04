import React from 'react'
import { Layout, Menu} from 'antd'

import TodoFooter from './TodoFooter'
import LoginForm from './LoginForm'
import logo from '../logo.svg'
import './App.css'

import AddTodo from '../containers/AddTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

const { Header, Footer, Sider, Content } = Layout


const App = () => (

   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <AddTodo />
                <VisibleTodoList />
                <TodoFooter />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
)

export default App


