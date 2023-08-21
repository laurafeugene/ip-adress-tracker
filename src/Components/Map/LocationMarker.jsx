import { useState } from 'react';
import { Marker, Popup, useMapEvents, MapContainer, TileLayer } from 'react-leaflet';

// Function to know where I am on the map

function LocationMarker() {
    const [position, setPosition] = useState(null);


    const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
          setPosition(e.latlng)
          map.flyTo(e.latlng, map.getZoom())
        },
      })
  
    return position === null ? null : (
        <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        position={position}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>,
        <Marker position={position}>
            <Popup>You're here ! </Popup>
        </Marker>
    )
  }
  
  export default LocationMarker;
