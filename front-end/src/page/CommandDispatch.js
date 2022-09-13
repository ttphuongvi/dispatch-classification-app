import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const dataList = JSON.parse(localStorage.getItem('list_dispatch_3'));

const imageData = getImage(dataList, "Công văn chỉ đạo");

const CommandDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn chỉ đạo"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default CommandDispatch;
