import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Form from "../Form/Form";

const AddPerson = ({ setUpdate }) => {
  const [addPerson, setAddPerson] = useState({
    department: "",
    firstName: "",
    lastName: "",
  });

  const handelAdd = async () => {
    await fetch(`https://6517dcef582f58d62d352dd2.mockapi.io/Person`, {
      method: "POST",
      body: JSON.stringify(addPerson),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setUpdate(true);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        autoComplete="off"
      >
        <Form
          action={handelAdd}
          data={addPerson}
          setData={setAddPerson}
          txtBtn={"add person"}
        />
      </Box>
    </>
  );
};

export default AddPerson;
