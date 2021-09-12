import React from 'react'
import Topbar from './components/Topbar/Topbar'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home from './pages/Home/Home.js'
import UserList from './pages/userList/UserList'
import User from './pages/user/User.js'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'


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
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/newproduct" component={NewProduct} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
