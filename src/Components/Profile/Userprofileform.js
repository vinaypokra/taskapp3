import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { Storage } from "aws-amplify";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { db } from "../../base";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    width: "100%",
  },
}));

export default function Userprofileform() {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // async function onChange(e) {
  //   // const file = e.target.files[0];
  //   try {
  //     const result = await Storage.put("test.txt", "Private Content", {
  //       level: "private",
  //       contentType: "text/plain",
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // }
  // async function onChanges(e) {
  //   const file = e.target.files[0];
  //   try {
  //     await Storage.put(file.name, file, {
  //       contentType: "image/png",
  //       level: "private", // contentType is optional
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // }
  const [userdata, setUserdata] = useState({
    FirstName: "",
    LastName: "",
    Dob: "",
    PhoneNumber: "",
    Gender: "",
    EmployeeId: "",
    Resume: "",
    ID: "",
  });

  const AddData = () => {
    db.collection("users").add({
      FirstName: userdata.FirstName,
      LastName: userdata.LastName,
      Dob: userdata.Dob,
      PhoneNumber: userdata.PhoneNumber,
      Gender: userdata.Gender,
      EmployeeId: userdata.EmployeeId,
      Resume: userdata.Resume,
      ID: userdata.ID,
    });
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate>
        <Grid container spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                // onChange={onChange}
                autoFocus
                value={userdata.FirstName}
                onChange={(e) => {
                  setUserdata({ ...userdata, FirstName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                // onChange={onChange}
                value={userdata.LastName}
                onChange={(e) => {
                  setUserdata({ ...userdata, LastName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                variant="outlined"
                fullWidth
                label="Date of Birth"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={onChange}
                value={userdata.Dob}
                onChange={(e) => {
                  setUserdata({ ...userdata, Dob: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPhoneNumber
                variant="outlined"
                fullWidth
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"in"}
                // onChange={handleChange}
                // onChange={onChange}
                value={userdata.PhoneNumber}
                onChange={(e) => {
                  setUserdata({ ...userdata, PhoneNumber: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Button className={classes.button} onClick={handleOpen}>
                Gender
              </Button> */}
              <FormControl className={classes.form}>
                <TextField
                  select
                  fullWidth
                  variant="outlined"
                  label="Gender"
                  labelId="gender"
                  id="gender"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  // onChange={handleChange}
                  value={userdata.Gender}
                  onChange={(e) => {
                    setUserdata({ ...userdata, Gender: e.target.value });
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Female</MenuItem>
                  <MenuItem value={20}>Male</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Employee"
                label="Employee ID"
                name="Employee ID"
                autoComplete="Employee ID"
                // onChange={onChange}
                value={userdata.EmployeeId}
                onChange={(e) => {
                  setUserdata({ ...userdata, EmployeeId: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Upload Your Resume"
                name="Resume"
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={onChanges}
                value={userdata.Resume}
                onChange={(e) => {
                  setUserdata({ ...userdata, Resume: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Upload Your ID"
                name="ID"
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={onChanges}
                value={userdata.ID}
                onChange={(e) => {
                  setUserdata({ ...userdata, ID: e.target.value });
                }}
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: "10px" }}
              startIcon={<SaveIcon />}
              onClick={AddData}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
