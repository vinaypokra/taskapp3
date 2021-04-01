import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

const formData = [
  { fieldName: "name", type: "name", row: 1 },
  { fieldName: "description", type: "description", row: 4 },
  { fieldName: "tag", type: "tag", row: 1 },
  { fieldName: "date", type: "datetime-local", row: 1 },
];

const MultipleForms = () => {
  const [inputfields, setInputfields] = useState([
    {
      name: "",
      description: "",
      tag: "",
      date: "",
    },
  ]);
  const handleAddNewfields = () => {
    setInputfields([
      ...inputfields,
      {
        name: "",
        description: "",
        tag: "",
        date: "",
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

  console.log(inputfields);

  const hello = (e) => {
    e.preventDefault();
  };
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={hello}>
        {inputfields.map((inputfield, index) => (
          <Grid container direction="row" xs={4} justify="center">
            <Typography>Task {index + 1}</Typography>
            <Grid xs={11} container item direction="column">
              {formData.map((formfield) => (
                <Grid item>
                  <TextField
                    id={formfield.fieldName}
                    autoFocus
                    rows={formfield.row}
                    margin="dense"
                    variant="outlined"
                    label={formfield.fieldName}
                    type={formfield.type}
                    onChange={(e) => handleOnChange(e, index)}
                    required
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={1}>
              {index !== 0 ? (
                <button onClick={() => handleRemoveNewfields(index)}>
                  Min
                </button>
              ) : null}
            </Grid>
          </Grid>
        ))}
        <button onClick={handleAddNewfields}>add</button>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultipleForms;
