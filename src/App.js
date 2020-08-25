import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Navbar'
import SignUp from './SignUp'
import SignInSide from './SignInSide'
import PrivateRoute from './PrivateRoute'

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<PrivateRoute exact path="/user/app" component={SignUp} />
				<Route exact path="/" component={SignInSide} />
			</div>
		</Router>
	)
}

export default App
