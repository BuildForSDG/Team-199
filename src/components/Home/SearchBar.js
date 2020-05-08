/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './css/searchbar.css';

class SearchBar extends Component {
	render() {
		return (
			<div className="row">
				{/* Geocoder input */}
				<input
					type="text"
					className="form-control mt-2 mr-lg-1 col-md-12 col-lg-5 search-bar"
					placeholder="Enter address here"
				/>
				{/* 3 words input */}
				<div className="input-group col-md-12 ml-lg-1 col-lg-5 mt-2 no-padding">
					<input
						type="text"
						className="form-control  search-bar col-xs-4"
						placeholder="First"
					/>
					<input
						type="text"
						className="form-control search-bar col-xs-4"
						placeholder="Three"
					/>
					<input
						type="text"
						className="form-control search-bar col-xs-4"
						placeholder="Words"
					/>
				</div>
			</div>
		);
	}
}

export default SearchBar;
