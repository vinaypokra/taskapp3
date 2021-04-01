import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

const TaskForm = () => {
  const classes = useStyles();

  const [name, setName] = useState();
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <Grid container direction="row">
          <Grid item>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              // error={name === ""}
              // helperText={name === "" ? "Please enter name" : " "}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              multiline
              label="Description"
              type="description"
              variant="outlined"
              value={description}
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
              // error={description === ""}
              // helperText={
              //   description === "" ? "Please enter description" : " "
              // }
              required
            />
          </Grid>
          <Grid item>
            <TextField
              autoFocus
              margin="dense"
              id="tag"
              label="Assigned to"
              type="tag"
              value={tag}
              variant="outlined"
              onChange={(e) => setTag(e.target.value)}
              // error={name === ""}
              // helperText={name === "" ? "Please enter name" : " "}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              autoFocus
              margin="dense"
              id="estimate"
              label="Estimated date of completion"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(e) => setDeadline(e.target.value)}
              // error={deadline === ""}
              // helperText={
              //   deadline === "" ? "Please enter estimated date" : " "
              // }
              required
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TaskForm;
