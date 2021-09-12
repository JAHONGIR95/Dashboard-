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
import Analytics from './pages/analytics/Analytics'
import Manage from './pages/manage/Manage'
import Reports from './pages/reports/Reports'
import Mail from './pages/mail/Mail'
import Feedback from './pages/feedback/Feedback'
import Message from './pages/message/Message'
import Transactions from './pages/transactions/Transactions'
import Sales from './pages/sales/Sales'


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/analytics" component={Analytics} /> 
          <Route path="/analytic" component={Analytics} /> 
          <Route path="/sales" component={Sales} /> 
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/newproduct" component={NewProduct} />
          <Route path="/transactions" component={Transactions} /> 
          <Route path="/reports" component={Reports} /> 
          <Route path="/mail" component={Mail} /> 
          <Route path="/feedback" component={Feedback} /> 
          <Route path="/message" component={Message} /> 
          <Route path="/manage" component={Manage} /> 
          <Route path="/reports" component={Reports} /> 
        </Switch>
      </div>
    </Router>
  )
}

export default App
