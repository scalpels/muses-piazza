import React from 'react'
import { Layout, Menu} from 'antd'
import { Link } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout

const MusesHeader = () => (
	<Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/todo'>todo</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/footer'>footer</Link></Menu.Item>
      </Menu>
    </Header>
	)  

export default MusesHeader
