import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";

function CustomMap({ data }) {
  // Pour toujours afficher la carte dès le début
  const dreamposition = [40.68893, -74.0441];
  if (!data)
    return (
      <div id="map">
        <MapContainer
          center={dreamposition}
          zoom={15}
          scrollWheelZoom={true}
          style={{ position: "relative", height: 500, zIndex: 1 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <Marker position={dreamposition}>
            <Popup>Are you at the top of Statue of Liberty ? <br/> Don't think so, please enter an IP Address !</Popup>
          </Marker>
        </MapContainer>
      </div>
    );

  const position = [Number(data.location.lat), Number(data.location.lng)];
  console.log(position);

  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ position: "relative", height: 500, zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <Marker position={position}>
          <Popup>Address IP is based here !</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CustomMap;
