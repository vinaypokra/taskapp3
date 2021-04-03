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
import { Button, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    "& .MuiTable-root": {
      minWidth: 650,
    },
    "& .MuiTableCell-head": {
      background: "aliceblue",
      fontWeight: "700",
    },
  },
});
const FetchUser = () => {
  const [userDataHolder, setUserdataHolder] = useState([]);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    async function getUserFromBase() {
      const response = await db
        .collection("emailDataBase")
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()));
      setUserdataHolder([...response]);
    }
    getUserFromBase();
  }, [update]);
  console.log(userDataHolder);

  const classes = useStyles();
  return (
    <>
      <h1 style={{ color: "black" }}>{update}</h1>
      <TableContainer component={Paper}>
        <Table className={classes.root} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Date of Birth</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Employee ID</TableCell>
              <TableCell align="left">ID Card</TableCell>
              <TableCell align="left">Resume</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Approve/Reject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataHolder.map((val, key) => (
              <TableRow key={key}>
                <TableCell align="left">{`${val.allData.FirstName} ${val.allData.LastName}`}</TableCell>
                <TableCell align="left">{val.allData.Gender}</TableCell>
                <TableCell align="left">{val.allData.DOB}</TableCell>
                <TableCell align="left">{val.allData.Email}</TableCell>
                <TableCell align="left">{val.allData.Phone}</TableCell>
                <TableCell align="left">{val.allData.EmployeeId}</TableCell>
                <TableCell align="left">{val.allData.IDCard}</TableCell>
                <TableCell align="left">{val.allData.Resume}</TableCell>
                <TableCell align="left">{val.allData.Status}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ margin: "3px" }}
                    onClick={() => {
                      db.collection("emailDataBase")
                        .doc(val.allData.Email)
                        .set({
                          allData: { ...val.allData, Status: "Approved" },
                        });
                      setUpdate("Wait...");
                      setTimeout(() => {
                        setUpdate("");
                      }, 2000);
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    style={{ margin: "3px" }}
                    onClick={() => {
                      db.collection("emailDataBase")
                        .doc(val.allData.Email)
                        .set({
                          allData: { ...val.allData, Status: "Pending..." },
                        });
                      setUpdate("Wait...");
                      setTimeout(() => {
                        setUpdate("");
                      }, 2000);
                    }}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FetchUser;
