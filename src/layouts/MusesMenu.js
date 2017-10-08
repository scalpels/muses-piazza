import React from 'react'
import { Menu} from 'antd'
import { Link } from 'react-router-dom'

const MusesMenu = () => (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/todo'>todo</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/footer'>footer</Link></Menu.Item>
        <Menu.Item key="4"><Link to='/itemList'>itemList</Link></Menu.Item>
        <Menu.Item key="5"><Link to='/comments'>commentList</Link></Menu.Item>
      </Menu>
	)  

export default MusesMenu
