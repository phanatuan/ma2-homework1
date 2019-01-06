import React, { Component } from 'react';
import Main from './Components/Main';
import Header from './Components/HeaderComponent';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
						<Main />
					<Footer />
				</div>
			</BrowserRouter>
			
		);
	}
}

export default App;
