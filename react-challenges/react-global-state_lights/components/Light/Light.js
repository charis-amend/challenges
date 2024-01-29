import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, id, onHandleToggle }) {

  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }

  return (
    <LightButton
      id={id}
      type="button"
      onClick={() => { onHandleToggle(id) }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
