import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../Style/Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import {useStateValue} from '../store/context/ContextManager';
import {actions} from '../store/actions';

const Search = ({hideButtons = false}) => {
	const history = useHistory();
	const [input, setInput] = useState('');
	const [{term}, dispach] = useStateValue();
	const searchHandler = async (e) => {
		e.preventDefault();
		dispach({
			type: actions.SET_SEARCH_TERM,
			payload: {terms: input},
		});
		history.push('/search');
	};
	return (
		<form className="search">
			<div className="search_input">
				<SearchIcon className="search_input_icon" />
				<input defaultValue={input} onChange={(e) => setInput(e.target.value)} />
				<MicIcon className="search_input_icon" />
			</div>
			{!hideButtons ? (
				<div className="search_buttons">
					<Button type="submit" variant="outlined" onClick={(e) => searchHandler(e)}>
						Google Search
					</Button>
					<Button variant="outlined">I'm Feeling Lucky</Button>
				</div>
			) : (
				<div className="search_buttons_hidden">
					<Button type="submit" variant="outlined" onClick={(e) => searchHandler(e)}>
						Google Search
					</Button>
					<Button variant="outlined">I'm Feeling Lucky</Button>
				</div>
			)}
		</form>
	);
};

export default Search;
