import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Form = ({ action, data, setData, txtBtn, type = "" }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="department"
        name="department"
        defaultValue={data.department}
        variant="outlined"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        label="firstName"
        name="firstName"
        defaultValue={data.firstName}
        variant="outlined"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        label="lastName"
        name="lastName"
        defaultValue={data.lastName}
        variant="outlined"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />

      <Button
        variant="outlined"
        onClick={type !== "change" ? () => action() : () => action(data.id)}
        sx={{ height: "max-content" }}
      >
        {" "}
        {txtBtn}{" "}
      </Button>
    </Box>
  );
};

export default Form;
