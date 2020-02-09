import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mystyle from "./Map.module.css";

// const clicked = evt => {
//   console.log(evt.lngLat);
// };
function Map(props) {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: props.lat,
    longitude: props.long,
    zoom: 10
  });
  console.log("inside map" + props.long);
  let reactmapgl;
  if (props.long) {
    reactmapgl = (
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWF5dXNobWsiLCJhIjoiY2s2ZGs0bGhiMDF0eTNucDZuNmpzeXBxcyJ9.zLmxjINmMo5Hhvxl9KS4CQ"
        mapStyle="mapbox://styles/aayushmk/ck6dmqdop5dgz1imglgtbo4a3"
        onClick={props.clicked}
      >
        <Marker latitude={props.lat} longitude={props.long}>
          {console.log("is state initialized" + viewport.longitude)}
          <button className={mystyle.button}></button>
        </Marker>
      </ReactMapGL>
    );
  } else {
    reactmapgl = <div>Loading maps....</div>;
  }
  return <div className={mystyle.map}>{reactmapgl}</div>;
}
export default Map;