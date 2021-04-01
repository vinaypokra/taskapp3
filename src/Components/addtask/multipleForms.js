import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Remove, Add, Send } from "@material-ui/icons";
import { connect } from "react-redux";
import { fetchData } from "../../actions/";

import { db } from "../../base";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

let newDate = new Date();
let date = moment(newDate).format("YYYY-MM-DD");

const formData = [
  { fieldName: "Name", type: "name", row: 1, default: "", mul: false },
  {
    fieldName: "Description",
    type: "description",
    row: 4,
    default: "",
    mul: true,
  },
  { fieldName: "Assigned", type: "tag", row: 1, default: "", mul: false },
  {
    fieldName: "Deadline",
    type: "date",
    row: 1,
    default: date,
    mul: false,
  },
];
var taskData = [];
const MultipleForms = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  const [inputfields, setInputfields] = useState([
    {
      Name: "",
      Description: "",
      Assigned: "",
      Deadline: "",
    },
  ]);
  const handleAddNewfields = () => {
    setInputfields([
      ...inputfields,
      {
        Name: "",
        Description: "",
        Assigned: "",
        Deadline: "",
      },
    ]);
  };

  const handleRemoveNewfields = (index) => {
    const values = [...inputfields];
    values.splice(index, 1);
    setInputfields(values);
  };

  const handleOnChange = (e, index) => {
    const values = [...inputfields];
    values[index][e.target.name] = e.target.value;
    setInputfields(values);
  };

  const hello = (e) => {
    e.preventDefault();

    inputfields.map((value) => {
      taskData.push({
        id: moment(newDate).format("YYYYMMDDHHMMSS"),
        taskAddDate: date,
        taskName: value.Name,
        taskDescription: value.Description,
        taskTo: value.Assigned.split(" "),
        taskDeadLine: value.Deadline,
      });
    });
    db.collection("taskdata").doc("taskData").set({ taskData });
    console.log(taskData);
    setInputfields(null);
  };
  const classes = useStyles();
  return (
    <>
      {inputfields !== null ? (
        <form className={classes.root} autoComplete="off" onSubmit={hello}>
          {inputfields.map((inputfield, index) => (
            <Grid container direction="row" xs={4}>
              <Typography color="primary">Task {index + 1}</Typography>
              <Grid xs={11} container item direction="column">
                {formData.map((formfield) => (
                  <Grid item>
                    <TextField
                      id={formfield.fieldName}
                      name={formfield.fieldName}
                      autoFocus
                      multiline={formfield.mul}
                      rows={formfield.row}
                      margin="dense"
                      variant="outlined"
                      defaultValue={formfield.default}
                      label={formfield.fieldName}
                      type={formfield.type}
                      onChange={(e) => handleOnChange(e, index)}
                      required
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={1}>
                <Button onClick={handleAddNewfields}>
                  <Add color="primary" />
                </Button>
                {index !== 0 ? (
                  <Button onClick={() => handleRemoveNewfields(index)}>
                    <Remove color="error" />
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          ))}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "8px" }}
          >
            Submit
            <Send style={{ marginLeft: "5px" }} />
          </Button>
        </form>
      ) : (
        <>
          <Typography variant="h5">Task Sent...</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "8px" }}
            onClick={() => {
              setInputfields([
                {
                  Name: "",
                  Description: "",
                  Assigned: "",
                  Deadline: "",
                },
              ]);
            }}
          >
            Add New Task
            <Add style={{ marginLeft: "5px" }} />
          </Button>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { taskData: state };
};
export default connect(mapStateToProps, { fetchData })(MultipleForms);
