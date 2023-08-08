import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './Map.css'

function Map() {
 
  return (
    <>
    <div id="map"></div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{
    position: 'relative',
    height: 500
  }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </>
  )
}

export default Map;