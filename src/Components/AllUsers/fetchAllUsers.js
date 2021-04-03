import React, { useEffect, useState } from "react";
import { db } from "../../base";

const FetchUser = () => {
  const [userDataHolder, setUserdataHolder] = useState([]);
  useEffect(() => {
    async function getUserFromBase() {
      const response = await db
        .collection("emailDataBase")
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()));
      setUserdataHolder([...response]);
    }
    getUserFromBase();
  }, []);
  console.log(userDataHolder);

  return (
    <>
      <h1 style={{ color: "black" }}>Hello</h1>
      {userDataHolder.map((val) => {
        return <p style={{ color: "black" }}>Email = {val.allData.Email}</p>;
      })}
    </>
  );
};

export default FetchUser;
