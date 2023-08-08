import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';

function CustomMap() {
const position = [51.505, -0.09];

  return (
    <div id="map">
     <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{position:"relative", height: 500}}>
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
