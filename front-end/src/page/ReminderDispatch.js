import React from "react";
import ListDispatch from "../component/ListDispatch";
import TemplatePage from "../component/TemplatePage";
import Title from "../component/Title";
import { getImage } from "../services/image";

const dataList = JSON.parse(localStorage.getItem('list_dispatch_4'));

console.log(dataList)

const imageData = getImage(dataList, "Công văn nhắc nhở");

const ReminderDispatch = () => {
  return (
    <TemplatePage
      content={
        <>
          <Title title="Công văn nhắc nhở"></Title>
          <ListDispatch data={imageData} />
        </>
      }
    ></TemplatePage>
  );
};

export default ReminderDispatch;
