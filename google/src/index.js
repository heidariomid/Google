import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {StateProvider} from './store/context/ContextManager';
import App from './App';

ReactDOM.render(
	<StateProvider>
		<Router>
			<App />
		</Router>
	</StateProvider>,
	document.getElementById('root'),
);
