import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 }
]

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);


  function handleToggle(lightId) {
    const updatedLightsOnArray = lights.map((light) => {
      // if the lightId of the light on which the handleToggle function is called, is the same ...
      // ...as one of the lights-ids from the inititalLights, then return... 
      if (lightId === light.id) {
        return { ...light, isOn: !light.isOn }
        // return {rest of the light-object, and change the value of isOn (normally false) but now !false => so true}
      } else {
        return light;
      }
    })
    setLights(updatedLightsOnArray);
  }

  // function handleToggleAllOff()

  // function handleToggleAllOn()

  const lightsAreOnCount = lights.filter((light) => light.isOn).length;


  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsAreOnCount={lightsAreOnCount}
      />
    </Layout>
  );
}
