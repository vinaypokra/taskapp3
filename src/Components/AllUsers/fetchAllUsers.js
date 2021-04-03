import React, { useEffect, useState } from "react";
import { db } from "../../base";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
