import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import addinvoices from './addInvoices';
import Home from './Home';

class Root extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/addinvoices' component={addinvoices} />
					<Route exact path='/' component={Home} />
				</Switch>
			</Router>
		);
	}
}
export default Root;
