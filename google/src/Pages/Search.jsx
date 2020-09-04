import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
const Search = () => {
	return (
		<div>
			about us
			<Link to="/">
				<Button>HOME</Button>
			</Link>
		</div>
	);
};

export default Search;
