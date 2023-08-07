import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const { MapContainer, TileLayer, Marker, Popup } = {
  MapContainer: dynamic(
    () => import("leaflet").then((module) => module.MapContainer),
    {
      ssr: false,
    }
  ),
  TileLayer: dynamic(
    () => import("leaflet").then((module) => module.MapContainer),
    {
      ssr: false,
    }
  ),
  Marker: dynamic(
    () => import("leaflet").then((module) => module.MapContainer),
    {
      ssr: false,
    }
  ),
  Popup: dynamic(
    () => import("leaflet").then((module) => module.MapContainer),
    {
      ssr: false,
    }
  ),
};

function Map({ markers }) {
  return (
    <div>
      <Head>
        {" "}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""
        />
      </Head>
      <MapContainer
        className="h-96"
        center={[51.505, -0.09]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(({ long, lat, popupText }) => (
          <Marker position={[long, lat]}>
            <Popup>{popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
