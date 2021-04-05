import React from "react";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  media: {
    height: 140,
    width: 100,
  },
  card: {
    borderRadius: 5,
    boxShadow: "none",
  },
});

const Dashboard = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <h1 style={{ color: "black" }}>Dashboard Page</h1>
      <Grid item container direction="row" spacing={5}>
        <Grid item xs={6}>
          <CardActionArea onClick={() => history.push("/allusers")}>
            <Card
              className={classes.card}
              style={{
                borderRadius: "5px",
                boxShadow:
                  "6px 6px 19px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              }}
            >
              <CardMedia
                style={{ height: 300, width: "100%" }}
                image={
                  "https://i.pinimg.com/originals/51/1e/05/511e05c83eccfef6b9fb95f3b332b214.jpg"
                }
              >
                <Grid container item justify="center">
                  <Grid item style={{ margin: "80px" }}>
                    <Typography variant="h2" style={{ color: "white" }}>
                      All Users Data
                    </Typography>
                  </Grid>
                </Grid>
              </CardMedia>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={6}>
          <CardActionArea onClick={() => history.push("/alltasks")}>
            <Card
              className={classes.card}
              style={{
                borderRadius: "5px",
                boxShadow:
                  "6px 6px 19px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              }}
            >
              <CardMedia
                style={{ height: 300, width: "100%" }}
                image={
                  "https://i.pinimg.com/originals/51/1e/05/511e05c83eccfef6b9fb95f3b332b214.jpg"
                }
              >
                <Grid container item justify="center">
                  <Grid item style={{ margin: "80px" }}>
                    <Typography variant="h2" style={{ color: "white" }}>
                      Assigned Tasks
                    </Typography>
                  </Grid>
                </Grid>
              </CardMedia>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
