import { Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

let newDate = new Date();
let date = moment(newDate).format("YYYY-MM-DD");

const formData = [
  { fieldName: "Name", type: "name", row: 1, default: "" },
  { fieldName: "Description", type: "description", row: 4, default: "" },
  { fieldName: "Tag", type: "tag", row: 1, default: "" },
  {
    fieldName: "Deadline",
    type: "date",
    row: 1,
    default: date,
  },
];

const MultipleForms = () => {
  const [inputfields, setInputfields] = useState([
    {
      Name: "",
      Description: "",
      Tag: "",
      Deadline: "",
    },
  ]);
  const handleAddNewfields = () => {
    setInputfields([
      ...inputfields,
      {
        Name: "",
        Description: "",
        Tag: "",
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

  console.log(inputfields);

  const hello = (e) => {
    e.preventDefault();
  };
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={hello}>
        {inputfields.map((inputfield, index) => (
          <Grid container direction="column">
            {formData.map((formfield) => (
              <Grid item>
                <TextField
                  id={formfield.fieldName}
                  autoFocus
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
            {index !== 0 ? (
              <button onClick={() => handleRemoveNewfields(index)}>Min</button>
            ) : null}
          </Grid>
        ))}
        <button onClick={handleAddNewfields}>add</button>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultipleForms;
