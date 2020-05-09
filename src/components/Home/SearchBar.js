/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './css/searchbar.css';
import geocodingClient from '@mapbox/mapbox-sdk/services/geocoding';
import { debounce } from 'throttle-debounce';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.client = geocodingClient({
			accessToken: process.env.REACT_APP_MAPBOX_KEY,
		});
		this.debouncedGeoEncoder = debounce(500, this.forwardGeoEncoder);
		this.state = {
			places: [],
			hovered: null,
			selectedAddress: null,
			addressSearchText: '',
		};
	}

	forwardGeoEncoder = (address) => {
		this.client
			.forwardGeocode({
				query: address,
				limit: 5,
				autocomplete: true,
			})
			.send()
			.then((res) => {
				const places = res.body.features;
				if (Array.isArray(places)) {
					this.state.addressSearchText.trim() !== ''
						? this.setState({ places })
						: this.setState({ places: [] });
				}
			})
			.catch((err) => {
				this.setState({ places: [] });
			});
	};

	onChangeSearchText = (text) => {
		this.setState({ addressSearchText: text });
		this.debouncedGeoEncoder(text);
	};

	render() {
		return (
			<div className="row">
				{/* Geocoder input */}
				<div className="mt-2 mr-lg-1 col-md-12 col-lg-5 ">
					<input
						type="text"
						className="form-control  search-bar"
						placeholder="Enter address here"
						onChange={(e) => this.onChangeSearchText(e.target.value)}
						value={this.state.addressSearchText}
					/>
					<ul className="list-group">
						{this.state.places.map((place, i) => {
							return (
								<li
									className={`list-group-item ${
										this.state.hovered === i ? 'active' : ''
									}`}
									onMouseEnter={() => this.setState({ hovered: i })}
									onMouseLeave={() => this.setState({ hovered: null })}
									onClick={async () => {
										this.setState({
											selectedAddress: place,
											places: [],
											addressSearchText: place.place_name,
										});
										try {
											const response = await fetch(
												`https://api.what3words.com/v3/convert-to-3wa?coordinates=${place.center[1]}%2C${place.center[0]}&key=${process.env.REACT_APP_W3W_KEY}`,
											);
											const threeWords = await response.json();
											console.log(threeWords.words);
											this.props.getLocationDetails({
												latitude: place.center[1],
												longitude: place.center[0],
												threeWords: threeWords.words,
											});
										} catch (error) {}
									}}
								>
									{place.place_name}
								</li>
							);
						})}
					</ul>
				</div>
				{/* 3 words input */}
				<div className="input-group col-md-12 ml-lg-1 col-lg-5 mt-2">
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
