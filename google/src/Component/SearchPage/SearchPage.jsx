import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../../Pages/Search';
import {useStateValue} from '../../store/context/ContextManager';
import '../../Style/SearchPage.css';
import GoogleImg from '../../images/google.png';
import useGoogleSearch from '../../API/useGoogleSearch';
import data from '../../API/dataResponse';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import YouTubeIcon from '@material-ui/icons/YouTube';
const SearchPage = () => {
	const [{term}, dispach] = useStateValue();
	// const {data} = useGoogleSearch(term);

	return (
		<div className="searchPage">
			<div className="searchPage_header">
				<Link to="/">
					<img className="searchPage_header_img" src={GoogleImg} alt="google-logo" />
				</Link>
				<div className="searchPage_header_searchBox">
					<Search hideButtons />
				</div>
				<div className="searchPage_header_options">
					<div className="searchPage_header_options_left">
						<div className="searchPage_header_icon">
							<SearchIcon />
							<Link to="/all">All</Link>
						</div>
						<div className="searchPage_header_icon">
							<ImageIcon />
							<Link to="/images">Images</Link>
						</div>
						<div className="searchPage_header_icon">
							<YouTubeIcon />
							<Link to="/videos">Videos</Link>
						</div>
						<div className="searchPage_header_icon">
							<DescriptionIcon />
							<Link to="/news">News</Link>
						</div>
						<div className="searchPage_header_icon">
							<LocalOfferIcon />
							<Link to="/shopping">Shopping</Link>
						</div>
						<div className="searchPage_header_icon">
							<RoomIcon />
							<Link to="/maps">Maps</Link>
						</div>
						<div className="searchPage_header_icon">
							<MoreVertIcon />
							<Link to="/more">More</Link>
						</div>
					</div>
					<div className="searchPage_header_options_right"></div>
				</div>
			</div>
			<div className="searchPage_body"></div>
		</div>
	);
};

export default SearchPage;
