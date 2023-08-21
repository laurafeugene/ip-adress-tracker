import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';


function CustomMap({data}){
  if (!data) return (<div>Enter an IP Address...</div>);
const position = [Number(data.location.lat), Number(data.location.lng)];
console.log(position);

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
      Address IP is based here !
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default CustomMap;
