import React from 'react';
// import './App.css';
import SearchBar from './components/Home/SearchBar';
import NavBar from './components/Home/Navbar';

function App() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<SearchBar />
			</div>
		</div>
	);
}

export default App;
