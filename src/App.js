import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./components/Map/Map";
import { API_KEY } from "./consts";
import s from "./App.module.css"
import { useState } from "react";
import image from "./img1.jpg"

const center = {
  lat: 50.5,
  lng: 30.5
};

const Places = [
  {
    id: 1,
    title: "First",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 49.5,
      lng: 31.5
    },
    target: false
  },
  {
    id: 2,
    title: "Second",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 48.5,
      lng: 32.5
    },
    target: false
  },
  {
    id: 3,
    title: "Third",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 50.5,
      lng: 30.5
    },
    target: false
  },
  {
    id: 4,
    title: "Fourth",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 51.5,
      lng: 29.5
    },
    target: false
  },
  {
    id: 5,
    title: "Fifth",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 52.5,
      lng: 28.5
    },
    target: false
  },
  {
    id: 6,
    title: "First",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 41.5,
      lng: 37.5
    },
    target: false
  },
  {
    id: 7,
    title: "Second",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 48.5,
      lng: 30.5
    },
    target: false
  },
  {
    id: 8,
    title: "Third",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 55.5,
      lng: 30.5
    },
    target: false
  },
  {
    id: 9,
    title: "Fourth",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 51.5,
      lng: 23.5
    },
    target: false
  },
  {
    id: 10,
    title: "Fifth",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'img1.jpg',
    coordinates: {
      lat: 55.5,
      lng: 28.5
    },
    target: false
  }
]

function App() {

  const [places, setPlaces] = useState(Places)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  return (
    <div className={s.container}>
      <div className={s.leftBar}>
        {places && places.map((el) => {
          return (
            <div key={el.id}>
              <img src={image} />
              <p>{el.title}</p>
            </div>
          )
        })}
      </div>
      {isLoaded ? <Map center={center} places={places} setPlaces={setPlaces} /> : <h1>Loading...</h1>}
      {
        places && places.filter((it) => it.target).map((el) => {
          return (
            <div key={el.id} className={s.rightBar}>
              <img src={image} />
              <p>{el.title}</p>
              <p>{el.description}</p>
            </div>
          )
        }
        )
      }
    </div>
  );
}

export default App;
