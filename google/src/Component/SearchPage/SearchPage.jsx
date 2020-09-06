import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../../Pages/Search';
import {useStateValue} from '../../store/context/ContextManager';
import '../../Style/SearchPage.css';
import GoogleImg from '../../images/google.png';
import useGoogleSearch from '../../API/useGoogleSearch';
// import data from '../../API/dataResponse';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import YouTubeIcon from '@material-ui/icons/YouTube';
const SearchPage = () => {
	const [{term}, dispach] = useStateValue();
	const {data} = useGoogleSearch(term);

	return (
		<div className="searchPage">
			<div className="searchPage_header">
				<Link to="/">
					<img className="searchPage_header_img" src={GoogleImg} alt="google" />
				</Link>
				<div className="searchPage_header_searchBox">
					<Search hideButtons />
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
						<div className="searchPage_header_options_right">
							<div className="searchPage_header_icon">
								<Link to="/setting">Setting</Link>
							</div>
							<div className="searchPage_header_icon">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{term && (
				<div className="searchPage_results">
					<p className="searchPage_result_count">
						About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
					</p>
					{data?.items.map((item) => (
						<div className="searchPage_result">
							<a className="searchPage_result_link" href={item.link}>
								{/* {item?.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src && <img className="searchPage_result_img" src={item.pagemap.cse_image[0].src} alt="" />} */}
								{item.displayLink}
							</a>
							<a className="searchPage_result_title" href={item.link}>
								<h2>{item.title}</h2>
							</a>
							<p className="searchPage_result_snipet">{item.snippet}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchPage;
