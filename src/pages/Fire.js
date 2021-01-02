import React from "react";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";
import { InfoDataTwo } from "../data/InfoData";
import { InfoDataThree } from "../data/InfoData";

const Fire = () => {
  return (
    <>
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} />
    </>
  );
};

export default Fire;
