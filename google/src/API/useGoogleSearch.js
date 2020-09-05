import React, {useState, useEffect} from 'react';
const useGoogleSearch = (term) => {
	const APIKey = 'AIzaSyB5ySJfVKzUIC9joCUki3cDYmHVoYgpxQ4';
	const SearchEngineID = 'cec46eb4ad0d505e0';
	const [data, setData] = useState(null);
	useEffect(() => {
		const FetchData = async () => {
			fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${SearchEngineID}&q=${term}`)
				.then((res) => res.json())
				.then((res) => setData(res));
		};
		FetchData();
	}, [term]);

	return {data};
};

export default useGoogleSearch;
