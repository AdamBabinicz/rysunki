import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Popup from "./Popup";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 800px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #fff;
    text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    /* @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    } */
  }

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  buttonLabel,
  reverse,
  image,
  title,
  p,
  em,
  img,
}) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <Button onClick={() => setButtonPopup(true)} primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{title}</h3>
          <br />
          <img src={img} /> <br />
          <p>{p}</p>
          <br />
          <em>{em}</em>
        </Popup>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="..." />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
