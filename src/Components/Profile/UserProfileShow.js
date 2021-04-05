import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions";

const Userprofileform = (props) => {
  const [editMode, setEditMode] = useState(true);
  useEffect(() => {
    props.fetchUserData(sessionStorage.getItem("userName"));
  }, []);

  return (
    <>
      <div style={{ color: "black" }}>
        <h1>UserProfileShow</h1>{" "}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { userData: state.userInfo };
};
export default connect(mapStateToProps, {
  fetchUserData,
})(Userprofileform);
