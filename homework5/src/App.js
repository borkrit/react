import "./App.css";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import CardPerson from "./components/Card/CardPerson";
import AddPerson from "./components/AddPerson/AddPerson";
import ChangeInfo from "./components/ChangeInfo/ChangeInfo";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [change, setChange] = useState(false);
  const [changePerson, setChangePerson] = useState(null);
  const [update, setUpdate] = useState(false);
 

  useEffect(() => {
    axios.get("https://6517dcef582f58d62d352dd2.mockapi.io/Person")
    .then((res) => setData(res.data))
    if (update === true) {
     
      setUpdate(false);
      setChange(false)
    }

  }, [update]);

  const handelChangeInfo = (item) => {
    setChange(!change);
    setChangePerson(item);
  };

  const handelDelPerson = async (id) => {
    try {
      await axios.delete(`https://6517dcef582f58d62d352dd2.mockapi.io/Person/${id}`).then((respons) =>
        respons.status == 200
          ? setData(data.filter((item) => item.id != id))
          : null
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        {change ? (
          <ChangeInfo
            changePerson={changePerson}
            setChangePerson={setChangePerson}
            data={data}
            setData={setData}
            setChange={setChange}
          />
        ) : (
          <AddPerson setUpdate={setUpdate} />
        )}
      </Container>

      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {data &&
          data.map((person) => (
            <CardPerson
              person={person}
              handelChangeInfo={handelChangeInfo}
              handelDelPerson={handelDelPerson}
            />
          ))}
      </Container>
    </div>
  );
}

export default App;
