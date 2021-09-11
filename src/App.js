import React from 'react'
import Topbar from './components/Topbar/Topbar'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home from './pages/Home/Home.js'
import UserList from './pages/userList/UserList'
import User from './pages/user/User.js'
import NewUser from './pages/newUser/NewUser'


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/newUser" component={NewUser} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
