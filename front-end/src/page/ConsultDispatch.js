import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const dataList = JSON.parse(localStorage.getItem('list_dispatch_7'));

const imageData = getImage(dataList, "Công văn xin ý kiến");

const ConsultDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn xin ý kiến"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default ConsultDispatch;
