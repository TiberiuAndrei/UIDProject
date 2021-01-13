import * as React from 'react';
import '../../styles/Map.css'
import map from '../../images/map.PNG'

const MapPage = () => {


    return (

        <div className="mapBox">

            <p className="message"> The following are the closest most useful local resources</p>
            <img src={map} width="650" height="300" />
        </div>
    );

}

export default MapPage;

