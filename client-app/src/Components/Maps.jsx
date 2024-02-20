import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userState, setUserState] = useState(null);
  const [stateDestinations, setStateDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the browser supports Geolocation
        if ('geolocation' in navigator) {
          // Request the user's location
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);

              // Reverse geocoding using OpenCage API
              const apiKey = '3b907f7a7e924a80a6908267def45354'; // Replace with your OpenCage API key
              const apiEndpoint = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en&pretty=1`;

              try {
                const response = await fetch(apiEndpoint);
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                  const state = data.results[0].components.state;
                  setUserState(state);
                }
              } catch (error) {
                console.error('Error fetching state from OpenCage API:', error.message);
              }
            },
            (error) => {
              console.error('Error getting user location:', error.message);
            }
          );
        } else {
          console.error('Geolocation is not supported by your browser.');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch tourist destinations based on the user's state
    const fetchDestinations = async () => {
      if (userState) {
        try {
          const stateData = await fetch(`/path/to/${userState.toLowerCase()}.json`);
          const stateDestinations = await stateData.json();
          setStateDestinations(stateDestinations[userState.toLowerCase()]);
        } catch (error) {
          console.error('Error fetching destinations for the state:', error.message);
        }
      }
    };

    fetchDestinations();
  }, [userState]);

  return (
    <MapContainer
      center={userLocation || [20.5937, 78.9629]} // Default to India if user location not available
      zoom={userLocation ? 6 : 5} // Adjust zoom level accordingly
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {userLocation && (
        <Marker position={userLocation}>
          <Popup>
            Your current location. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}

      {/* Map markers for tourist destinations based on user's state */}
      {stateDestinations.map((destination, index) => (
        <Marker key={index} position={destination.coordinates}>
          <Popup>
            {destination}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
