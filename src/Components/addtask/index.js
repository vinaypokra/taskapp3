import React from "react";
import Calendar from "./Calendar/calendar";
import AddTaskPage from "./addTaskPage";
import moment from "moment";

const Addtask = () => {
  const [open, setOpen] = React.useState(false);
  const [dateState, setDateState] = React.useState(new Date());
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const selectedDate = moment(dateState).format("MM/DD/YYYY");
  return (
    <>
      <Calendar {...{ handleClickOpen, setDateState, selectedDate }}>
        <AddTaskPage
          {...{ setOpen, open, handleClose, handleClickOpen, selectedDate }}
        />
      </Calendar>
    </>
  );
};

export default Addtask;
