import React from "react";
import Calendar from "./Calendar/calendar";
import AddTaskPage from "./addTaskPage";
const Addtask = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddTaskPage {...{ setOpen, open, handleClose, handleClickOpen }}>
        <Calendar {...{ handleClickOpen }} />
      </AddTaskPage>
    </>
  );
};

export default Addtask;
