import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const dataList = JSON.parse(localStorage.getItem('list_dispatch_5'));

const imageData = getImage(dataList, "Công văn yêu cầu");

const RequestDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn yêu cầu"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default RequestDispatch;
