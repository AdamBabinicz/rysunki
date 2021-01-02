import React from "react";
import InfoSection from "../components/InfoSection";
import { InfoDataSeven } from "../data/InfoData";
import { InfoDataEight } from "../data/InfoData";

const About = () => {
  return (
    <>
      <InfoSection {...InfoDataSeven} />
      <InfoSection {...InfoDataEight} />
    </>
  );
};

export default About;
