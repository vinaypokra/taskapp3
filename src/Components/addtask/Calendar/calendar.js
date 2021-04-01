import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Cal.css";

import { Grid } from "@material-ui/core";

export default function Cal({
  handleClickOpen,
  dateState,
  setDateState,
  children,
  selectedDate,
}) {
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <>
      {children}
      <Calendar
        value={dateState}
        onChange={changeDate}
        onClickDay={handleClickOpen}
      />
      <Grid item>
        <p style={{ margin: "30px 100px", color: "black" }}>
          Current selected date is : <b>{selectedDate}</b>
        </p>
      </Grid>
    </>
  );
}
