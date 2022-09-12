import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const imageData = getImage(12, "Công văn giải thích");

const ExplainOfficialDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn giải thích"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default ExplainOfficialDispatch;
