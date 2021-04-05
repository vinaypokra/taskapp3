import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import TaskForm from "./taskForm";
import TaskCard from "./taskCardDesign/CardBox";

import MultipleForms from "./multipleForms";
import { connect } from "react-redux";
import { fetchData, setData, sendDataToBase } from "../../actions/";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const MaxWidthDialog = ({
  open,
  setOpen,
  handleClose,
  handleClickOpen,
  selectedDate,
  taskData,
}) => {
  const classes = useStyles();
  console.log(selectedDate);
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Add Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {" "}
            Selected Date : {selectedDate}{" "}
          </DialogContentText>
          <Grid container item direction="row" spacing={3}>
            <Grid item xs={4}>
              <MultipleForms />
            </Grid>
            <Grid item xs={8} container direction="row">
              {taskData.map((taskValue) => (
                <Grid item xs={5}>
                  <TaskCard {...taskValue} />
                </Grid>
              ))}
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
};
const mapStateToProps = (state) => {
  console.log("taskData", state.taskData);
  return { taskData: state.taskData };
};
export default connect(mapStateToProps, { fetchData, setData, sendDataToBase })(
  MaxWidthDialog
);
