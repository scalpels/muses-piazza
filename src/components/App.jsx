import React from 'react'
import { Layout} from 'antd'
import MusesRoutes from '../routers/MusesRoutes'
import MusesMenu from '../layouts/MusesMenu'
// import logo from '../logo.svg'
import './App.css'

const { Header,Footer, Content } = Layout

const App = () => (

   <Layout className="layout">
    <Header>
     <MusesMenu/>
    </Header> 
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


