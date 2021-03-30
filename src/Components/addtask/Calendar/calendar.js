import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Cal.css";
import moment from "moment";
import { Grid } from "@material-ui/core";

export default function Cal() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <>
      <Calendar value={dateState} onChange={changeDate} />
      {/*   <Grid item>
        <p style={{ margin: "30px 100px" }}>
          Current selected date is{" "}
          <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        </p>
      </Grid> */}
    </>
  );
}
