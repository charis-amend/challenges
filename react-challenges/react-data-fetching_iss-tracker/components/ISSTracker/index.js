// import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {

  const { data, isLoading, error, mutate } = useSWR(URL, { refreshInterval: 5000 });

  // transforming data to coords, so i can use it in return()
  const coords = data;

  if (isLoading) return <div className="spinner">Loading ... </div>
  console.log("--- data ---: ", data,
    "--- new var coords --- :", coords)
  if (error) return <div className="error" />
  console.log("data from useSWR():----", data)

  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map
        longitude={coords.longitude}
        latitude={coords.latitude}
      />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
