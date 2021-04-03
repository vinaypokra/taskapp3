import React from "react";
import ReactDOM from "react-dom";
import { db } from "../../base";

const FetchUser = () => {
  const data = db.collection("emailDataBase").get();

  console.log(data);
  return <></>;
};

export default FetchUser;
