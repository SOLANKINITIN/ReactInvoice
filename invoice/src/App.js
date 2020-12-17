import React from 'react';
import Root from './Pages/index';

class App extends React.Component {
	render() {
		console.log(process.env.REACT_APP_PORT);
		return (
			<div>
				<Root />
			</div>
		);
	}
}

export default App;
