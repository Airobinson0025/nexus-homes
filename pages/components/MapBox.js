import React from 'react'
import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapBox = () => {

  return (
    <Map 
        initialViewState={{
          longitude: -84.386330,
          latitude: 33.753746,
          zoom:10
        }}
        style={{width: 650, height: 700}}
        mapStyle='mapbox://styles/airobinson0025/cliho11qw00jx01p14g3w33ki/draft' 
        mapboxAccessToken={process.env.mapbox_key}
        />
  )
}

export default MapBox