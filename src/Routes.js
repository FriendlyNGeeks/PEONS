import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './routes/Home'
import Admin from './routes/Admin'

const Routes = () => { 
    return (
     <Router>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/admin*' component={Admin}/>
		</Switch>
	 </Router>
	);
};

export default Routes;