import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<Search />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
