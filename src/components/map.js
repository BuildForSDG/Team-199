
import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';
class Map extends Component{
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
            var markers = [];

            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: {lat: 51.520833, lng:-0.195521}
            });
            
        }
        else{
            alert("script not loaded");
        }
    }

    render(){
        return(
            <div>
                <div id="map" style={{height: "400px"}}></div>
            </div>
        )
    }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyD3UtX5ItKVQtn6vT9GHJ4FZzwveFqlnuY"]
)(Map)