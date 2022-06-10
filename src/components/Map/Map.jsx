import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";
import s from "./Map.module.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControle: false,
  rotateControl: false,
  streetViewControl: false,
  clicableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};

const Map = ({ center, places, setPlaces }) => {

  function setTarget(id) {
    setPlaces((prew)=>{
      return prew.map((el)=>{
        if (el.id == id) {
          return {...el, target: true}
        } else {
          return {...el, target: false}
        }
      })
    })
  }

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <div className={s.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {places && places.map((el)=>{
          return (
            <Marker key={el.id} position={el.coordinates} onClick={()=>setTarget(el.id)}/>
          )
        })}
      </GoogleMap>
    </div>
  );
};

export default Map;
