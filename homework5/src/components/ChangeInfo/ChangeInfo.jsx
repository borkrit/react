import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Form from "../Form/Form";
const ChangeInfo = ({ changePerson, setChangePerson, setData, data }) => {
  const handelSub = async (id) => {
    await fetch(`https://6517dcef582f58d62d352dd2.mockapi.io/Person/${id}`, {
      method: "PUT",
      body: JSON.stringify(changePerson),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setData(
      data.map((item) => {
        if (item.id === id) {
          return changePerson;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      autoComplete="off"
    >
      <Form
        action={handelSub}
        setData={setChangePerson}
        data={changePerson}
        txtBtn="Change information"
        type="change"
      />
    </Box>
  );
};

export default ChangeInfo;