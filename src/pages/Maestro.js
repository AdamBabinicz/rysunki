import React from "react";
import InfoSection from "../components/InfoSection";
import { InfoDataFour } from "../data/InfoData";
import { InfoDataFive } from "../data/InfoData";
import { InfoDataSix } from "../data/InfoData";

const Maestro = () => {
  return (
    <>
      <InfoSection {...InfoDataFour} />
      <InfoSection {...InfoDataFive} />
      <InfoSection {...InfoDataSix} />
    </>
  );
};

export default Maestro;
