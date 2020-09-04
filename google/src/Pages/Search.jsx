import React from 'react';
import '../Style/Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
const Search = () => {
	return (
		<div className="search">
			<div className="search_input">
				<SearchIcon className="search_input_icon" />
				<input />
				<MicIcon className="search_input_icon" />
			</div>
			<div className="search_buttons">
				<Button variant="outlined">Google Search</Button>
				<Button variant="outlined">I'm Feeling Lucky</Button>
			</div>
		</div>
	);
};

export default Search;
