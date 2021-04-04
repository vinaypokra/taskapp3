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
      background: "#323232",
      fontWeight: "700",
    },
    "& .MuiTableCell-body": {
      background: "#32323257",
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
              <TableCell align="left">
                <Typography style={{ color: "white", width: 200 }}>
                  Name
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white" }}>Gender</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white", width: 100 }}>
                  Date of Birth
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white" }}>Email</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white", width: 150 }}>
                  Phone Number
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white", width: 100 }}>
                  Employee ID
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white" }}>ID Card</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white" }}>Resume</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white" }}>Status</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white", width: 200 }}>
                  Approve/Reject
                </Typography>
              </TableCell>
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
                      db.collection("taskdata")
                        .doc(val.allData.Email)
                        .set({
                          allData: {
                            id: "",
                            taskAddDate: "",
                            taskName: "",
                            taskDescription: "",
                            taskTo: "",
                            taskDeadLine: "",
                          },
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
