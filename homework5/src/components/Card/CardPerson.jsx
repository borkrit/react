import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { CardActions } from "@mui/material";

const CardPerson = ({ ...props }) => {



  return (
    <Card sx={{ maxWidth: 345, marginBlock: "30px", marginInline: "20px",padding:'1em '  }}>
      <Avatar
        alt={props.person.firstName}
        src={props.person.avatar}
        sx={{ width: 56, height: 56 }}
      />
      <p>{props.person.department}</p>
      <p>
        {props.person.firstName} {props.person.lastName}{" "}
      </p>

      <CardActions>
        <Button
          variant="outlined"
          onClick={() => props.handelDelPerson(props.person.id)}
        >
          {" "}
          Del person{" "}
        </Button>
        <Button
          variant="contained"
          onClick={(e) => props.handelChangeInfo(props.person)}
        >
          {" "}
          change info{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardPerson;
