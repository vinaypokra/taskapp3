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
import { connect } from "react-redux";
import { userProfileInfo, setUserProfileInfo } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    width: "100%",
  },
}));

const Userprofileform = (props) => {
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
    props.setUserProfileInfo({
      FirstName: userdata.FirstName,
      LastName: userdata.LastName,
      DOB: userdata.Dob,
      Phone: userdata.PhoneNumber,
      Gender: userdata.Gender,
      EmployeeId: userdata.EmployeeId,
      Resume: userdata.Resume,
      IDCard: userdata.ID,
      Email: sessionStorage.getItem("userName"),
      Status: "Pending...",
    });
    props.userProfileInfo(sessionStorage.getItem("userName"));
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate>
        <Grid container spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 style={{ textAlign: "center", color: "black" }}>
                User Profile
              </h1>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <img
                src="https://picsum.photos/200/300"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
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
              <TextField
                type="tel"
                variant="outlined"
                fullWidth
                name="phone"
                label="Phone Number"
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
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
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
};
const mapStateToProps = (state) => {
  console.log(state);
  return { taskData: state };
};
export default connect(mapStateToProps, {
  userProfileInfo,
  setUserProfileInfo,
})(Userprofileform);
