import React, { useState } from 'react';
// import './App.css';
import SearchBar from './components/Home/SearchBar';
import NavBar from './components/Home/Navbar';

function App() {
	const [locationDetails, setLocationDetails] = useState({
		latitude: null,
		longitude: null,
		threeWords: null,
	});

	const getLocationDetails = ({ latitude, longitude, threeWords }) => {
		setLocationDetails({ latitude, longitude, threeWords });
	};
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="mt-3">
					<SearchBar getLocationDetails={getLocationDetails} />
				</div>

				<div>
					<p>{locationDetails.latitude}</p>
					<p>{locationDetails.longitude}</p>
					<p>{locationDetails.threeWords}</p>
				</div>
			</div>
		</div>
	);
}

export default App;
