import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { db } from "../../base";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
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

function Row(props) {
  const { val } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {`${val.allData.FirstName} ${val.allData.LastName}`}
        </TableCell>
        <TableCell align="left">{val.allData.Email}</TableCell>
        <TableCell align="left">10</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Tasks Assigned To{" "}
                {`${val.allData.FirstName} ${val.allData.LastName}`}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Assigned On</TableCell>
                    <TableCell>Name of Task</TableCell>
                    <TableCell align="right">Progress</TableCell>
                    <TableCell align="right">Deadline</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      12-05-2021
                    </TableCell>
                    <TableCell>React App</TableCell>
                    <TableCell align="right">
                      1st version is ready for review
                    </TableCell>
                    <TableCell align="right">30-05-2021</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      12-05-2021
                    </TableCell>
                    <TableCell>React App</TableCell>
                    <TableCell align="right">
                      1st version is ready for review
                    </TableCell>
                    <TableCell align="right">30-05-2021</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function AllUsersTask() {
  const classes = useRowStyles();
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
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">
              <Typography style={{ color: "white", fontWeight: "700" }}>
                Name
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography style={{ color: "white", fontWeight: "700" }}>
                Email
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography style={{ color: "white", fontWeight: "700" }}>
                Number of Tasks
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDataHolder.map((val, key) => (
            <Row key={key} val={val} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
