import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ ...taskValue }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        {" "}
        <Typography variant="h5" component="h2">
          TaskName : {taskValue.taskName}
        </Typography>
        <br></br>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {bull} DeadLine : {taskValue.taskDeadLine}
        </Typography>{" "}
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {bull} Assigned On : {taskValue.taskAddDate}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {bull} Description : {taskValue.taskDescription}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Assigned To :{" "}
          {taskValue.taskTo.map((val) => (
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {bull} {val}
            </Typography>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update Progress...</Button>
      </CardActions>
    </Card>
  );
}
