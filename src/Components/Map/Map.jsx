import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import { useEffect, useState } from 'react';
import { client } from '../../api/api';

function CustomMap(){
const [lat, setLat] = useState("");
const [lng, setLng] = useState("");

useEffect(() => {
client.get("")
.then((response) => {
    setLat(response.data.location.lat);
    setLng(response.data.location.lng);
});
}, []);

const position = [Number(lat), Number(lng)];

  return (
    <div id="map">
     <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{position:"relative", height: 500, zIndex:1}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
<LocationMarker />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default CustomMap;
