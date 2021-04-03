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
      <TableHead>
        <TableRow>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Date of Birth</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left"></TableCell>
          <TableCell align="left">Status</TableCell>
          {sessionStorage.getItem("userName") !== "admin@gmail.com" ? (
            <TableCell align="left">Update</TableCell>
          ) : null}
        </TableRow>
      </TableHead>
      {userDataHolder.map((val) => {
        return <p style={{ color: "black" }}>Email = {val.allData.Email}</p>;
      })}
    </>
  );
};

export default FetchUser;
