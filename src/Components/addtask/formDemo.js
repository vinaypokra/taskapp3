import React, { useState } from "react";
const formData = [
  { feildName: "name", type: "text" },
  { feildName: "lastName", type: "text" },
  { feildName: "email", type: "email" },
];

const Formdemo = () => {
  const [inputFeilds, setInputFeilds] = useState([
    {
      name: "",
      lastName: "",
      email: "",
    },
  ]);
  const handleAddNewFeilds = () => {
    setInputFeilds([
      ...inputFeilds,
      {
        name: "",
        lastName: "",
        email: "",
      },
    ]);
  };

  const handleRemoveNewFeilds = (index) => {
    const values = [...inputFeilds];
    values.splice(index, 1);
    setInputFeilds(values);
  };

  const handleOnChange = (e, index) => {
    const values = [...inputFeilds];
    values[index][e.target.name] = e.target.value;
    setInputFeilds(values);
  };

  console.log(inputFeilds);

  const hello = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={hello}>
        {inputFeilds.map((inputFeild, index) => (
          <div>
            {formData.map((formFeild) => (
              <input
                name={formFeild.feildName}
                type={formFeild.type}
                onChange={(e) => handleOnChange(e, index)}
              />
            ))}
            <button onClick={handleAddNewFeilds}>add</button>
            {index !== 0 ? (
              <button onClick={() => handleRemoveNewFeilds(index)}>Min</button>
            ) : null}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Formdemo;
