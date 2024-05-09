import React, { useState } from "react";
import styled from "styled-components";

import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch";


const Room = styled.div`
position: relative;
width: 500px;
height: 500px;
border: 10px solid black;
margin: 0 auto;
`;


function App() {
  const [lampOneOn, setlampOneOn] = useState(true); //Lamp One
  const [lampTwoOn, setlampTwoOn] = useState(false); //Lamp Two

  const switchLampOne = () => setlampOneOn((prev) => !prev); //switch of lamp one
  const switchLampTwo = () => setlampTwoOn((prev) => !prev); //switch of lamp two

  return (
    <Room>
      <Lamp lampOn={lampOneOn} position="left" /> {/* lamp1  */}
      <Lamp lampOn={lampTwoOn} position="right" /> {/* lamp2  */}
      {/* switchOne  */}
      <LightSwitch
        name="one"
        callback={switchLampOne}
        switchOn={lampOneOn}
        position="left"
      />
      {/* switchTwo  */}
      <LightSwitch
        name="two"
        callback={switchLampTwo}
        switchOn={lampTwoOn}
        position="right"
      />
    </Room>
  );
}

export default App;
