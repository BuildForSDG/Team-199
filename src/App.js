import React from 'react';
// import './App.css';
import SearchBar from './components/Home/SearchBar';
import NavBar from './components/Home/Navbar';

function App() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="mt-3">
					<SearchBar />
				</div>
			</div>
		</div>
	);
}

export default App;
