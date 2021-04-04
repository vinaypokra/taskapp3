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
import { Button, Typography, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles({
  root: {
    "& .MuiTable-root": {
      minWidth: 650,
    },
    "& .MuiTableCell-head": {
      background: "#323232",
    },
    "& .MuiTableCell-body": {
      background: "#32323257",
    },
  },
});

var value = [];

function DialogBox({ open, handleClose }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Profile</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{`${value.FirstName} ${value.LastName}`}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      Gender
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{value.Gender}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      Date of Birth
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{value.DOB}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      Email
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{value.Email}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      Phone Number
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{value.Phone}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      Employee ID
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="h5">{value.EmployeeId}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{ marginTop: "50px" }}
            spacing={2}
          >
            <Grid item>
              <img src={value.IDCard} alt="IDCard" />
            </Grid>
            <Grid item>
              <img src={value.Resume} alt="Resume" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const FetchUser = () => {
  const [userDataHolder, setUserdataHolder] = useState([]);
  const [update, setUpdate] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <DialogBox open={open} handleClose={handleClose} />
      <h1 style={{ color: "black" }}>{update}</h1>
      <TableContainer component={Paper}>
        <Table className={classes.root} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography
                  style={{ color: "white", width: 200, fontWeight: "700" }}
                >
                  Name
                </Typography>
              </TableCell>
              {/* <TableCell align="left">
                <Typography style={{ color: "white", fontWeight: "700" }}>
                  Gender
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  style={{ color: "white", width: 100, fontWeight: "700" }}
                >
                  Date of Birth
                </Typography>
              </TableCell> */}
              <TableCell align="left">
                <Typography style={{ color: "white", fontWeight: "700" }}>
                  Email
                </Typography>
              </TableCell>
              {/* <TableCell align="left">
                <Typography
                  style={{ color: "white", width: 150, fontWeight: "700" }}
                >
                  Phone Number
                </Typography>
              </TableCell> */}
              <TableCell align="left">
                <Typography
                  style={{ color: "white", width: 100, fontWeight: "700" }}
                >
                  Employee ID
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  style={{ color: "white", width: 200, fontWeight: "700" }}
                >
                  Profile
                </Typography>
              </TableCell>
              {/* <TableCell align="left">
                <Typography style={{ color: "white", fontWeight: "700" }}>
                  ID Card
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ color: "white", fontWeight: "700" }}>
                  Resume
                </Typography>
              </TableCell> */}
              <TableCell align="left">
                <Typography style={{ color: "white", fontWeight: "700" }}>
                  Status
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  style={{ color: "white", width: 200, fontWeight: "700" }}
                >
                  Approve/Reject
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataHolder.map((val, key) => (
              <>
                <TableRow key={key}>
                  <TableCell align="left">{`${val.allData.FirstName} ${val.allData.LastName}`}</TableCell>
                  {/* <TableCell align="left">{val.allData.Gender}</TableCell>
                <TableCell align="left">{val.allData.DOB}</TableCell> */}
                  <TableCell align="left">{val.allData.Email}</TableCell>
                  {/* <TableCell align="left">{val.allData.Phone}</TableCell> */}
                  <TableCell align="left">{val.allData.EmployeeId}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#323232", color: "white" }}
                      size="small"
                      onClick={() => {
                        handleClickOpen();
                        value = val.allData;
                      }}
                    >
                      Click Here
                    </Button>
                  </TableCell>
                  {/* <TableCell align="left">{val.allData.IDCard}</TableCell>
                <TableCell align="left">{val.allData.Resume}</TableCell> */}
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
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FetchUser;
