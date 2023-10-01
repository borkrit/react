import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Form from "../Form/Form";
import axios from "axios";

const AddPerson = ({ setUpdate }) => {
  const [addPerson, setAddPerson] = useState({
    department: "",
    firstName: "",
    lastName: "",
  });

  const handelAdd = async () => {
    await axios.post(
      `https://6517dcef582f58d62d352dd2.mockapi.io/Person`,
      {
        department: addPerson.department,
        firstName: addPerson.firstName,
        lastName: addPerson.lastName,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

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
