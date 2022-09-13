import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const dataList = JSON.parse(localStorage.getItem('list_dispatch_6'));

const imageData = getImage(dataList, "Công văn phúc đáp");

const ReplyDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn phúc đáp"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default ReplyDispatch;
