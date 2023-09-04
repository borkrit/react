import { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./component/Item";

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];

function App() {
  const [mainBorder, setMainBorder] = useState("1px");
  const [selectedAnimal, setSelectedAnimal] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    let interval = setInterval(() => {
      do {
        setCurrentIndex(Math.floor(Math.random() * animals.length));
      } while (selectedAnimal.includes(animals[currentIndex]));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedAnimal.includes(animals[currentIndex]) == false) {
      if (animals[currentIndex] != undefined) {
        setSelectedAnimal([...selectedAnimal, animals[currentIndex]]);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (selectedAnimal.length >= Math.round(animals.length / 2)) {
      setMainBorder("10px");
    }

    if (selectedAnimal.length >= animals.length) {
      setMainBorder("20px");
    }
  }, [selectedAnimal]);

  return (
    <div className="App">
      <table style={{ border: `${mainBorder} solid` }}>
        <tbody>
          {animals.map((animal, id) => (
            <Item key={id} item={animal} selected={selectedAnimal} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
