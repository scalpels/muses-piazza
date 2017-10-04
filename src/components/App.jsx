import React from 'react'

import { Layout } from 'antd'


import XFooter from './Footer'
import logo from '../logo.svg'
import './App.css'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const { Header, Footer, Sider, Content } = Layout


const App = () => (
<div>
	 <Layout>
      <Header>
      	<img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Muses Piazza</h1>
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
        	    <AddTodo />
                <VisibleTodoList />
        </Content>
      </Layout>
      <Footer>
      	    <XFooter />
      </Footer>
    </Layout>
</div>
)

export default App
