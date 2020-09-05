import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import googleImg from '../images/google.png';
import {useStateValue} from '../store/context/ContextManager';
import '../Style/Home.css';
import Search from './Search';

const Home = () => {
	return (
		<div className="home">
			<div className="home_header">
				<div className="home_header_left">
					<Link to="about">About</Link>
					<Link to="store">Store</Link>
				</div>
				<div className="home_header_right">
					<Link to="gmail">Gmail</Link>
					<Link to="images">Images</Link>
					<AppsIcon />
					<Avatar />
				</div>
			</div>
			<div className="home_body">
				<img src={googleImg} alt="google" />
				<div className="home_input_container">
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Home;
