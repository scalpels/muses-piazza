import React from 'react'
import { Layout, Menu} from 'antd'
import { Link } from 'react-router-dom'

import MusesRoutes from '../routers/MusesRoutes'
import MusesHeader from '../layouts/MusesHeader'
import logo from '../logo.svg'
import './App.css'

const { Footer, Sider, Content } = Layout

const App = () => (

   <Layout className="layout">
     <MusesHeader/>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <MusesRoutes />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
)

export default App


