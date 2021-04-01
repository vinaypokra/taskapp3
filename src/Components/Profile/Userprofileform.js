import React from "react";
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
  async function onChange(e) {
    // const file = e.target.files[0];
    try {
      const result = await Storage.put("test.txt", "Private Content", {
        level: "private",
        contentType: "text/plain",
      });
    } catch (error) {
      alert(error);
    }
  }
  async function onChanges(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png",
        level: "private", // contentType is optional
      });
    } catch (error) {
      alert(error);
    }
  }

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
                onChange={onChange}
                autoFocus
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                  onChange={handleChange}
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
                onChange={onChange}
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
                onChange={onChanges}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Upload Your Resume"
                name="upload-resume"
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onChanges}
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: "10px" }}
              startIcon={<SaveIcon />}
              onClick={(onChange, onChanges)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
