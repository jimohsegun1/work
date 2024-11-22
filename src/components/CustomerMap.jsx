import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CustomerMap.css";

// Sample customer locations
const customers = [
  { id: 1, name: "San Francisco", position: [37.7749, -122.4194], count: 201 },
  { id: 2, name: "Oakland", position: [37.8044, -122.2711], count: 123 },
  { id: 3, name: "Berkeley", position: [37.8715, -122.273], count: 89 },
  { id: 4, name: "San Jose", position: [37.3382, -121.8863], count: 176 },
];

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
});

const CustomerMap = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-96">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Customer Map</h2>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        style={{ height: "80%", borderRadius: "10px" }}
        className="customer-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {customers.map((customer) => (
          <Marker key={customer.id} position={customer.position} icon={markerIcon}>
            <Popup>
              <strong>{customer.name}</strong>
              <br />
              {customer.count} Customers
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CustomerMap;
