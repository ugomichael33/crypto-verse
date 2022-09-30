import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../assets/images/cryptologo.jpeg'


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'> 
                <Link to='/'>Cryptoverse</Link>
            </Typography.Title>
            
            {/* <Button className='menu-control=container'>

            </Button> */}
        </div>
        <Menu 
            theme='dark'
            onClick={({key}) => {
                  navigate(key)
            }}
            items={[
              {label: "Home", key:"/", icon: <HomeOutlined />},
              {label: "Crytocurrencies", key:"/cryptocurrencies", icon: <FundOutlined />},
              {label: "Exchanges", key:"/exchanges", icon: <MoneyCollectOutlined />},
              {label: "News", key:"/news", icon: <BulbOutlined />}
            ]}
        >
        </Menu>  
        
    </div>
  )
}

export default Navbar