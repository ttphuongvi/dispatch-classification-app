import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const dataList = JSON.parse(localStorage.getItem('list_dispatch_2'));

const imageData = getImage(dataList, "Công văn hướng dẫn");

const InstructiveDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn hướng dẫn"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default InstructiveDispatch;
