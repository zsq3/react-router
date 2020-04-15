import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './App.css';
import { Menu } from 'element-react';


import Personal from "./components/center/index";
import Manage from "./components/manage/index";
import News from "./components/news/index";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
                    <Menu.Item index="1">
                        <NavLink exact to='/'>个人中心</NavLink>
                    </Menu.Item>
                    <Menu.Item index="2">
                        <NavLink to='/new'>新闻</NavLink>
                    </Menu.Item>
                    <Menu.Item index="3">
                        <NavLink to='/manage'>订单管理</NavLink>
                    </Menu.Item>
                </Menu>
                <div>
                    <Switch>
                        <Route exact path='/' component={ Personal }></Route>
                        <Route path='/new' component={ News }></Route>
                        <Route path='/manage' component={ Manage }></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
