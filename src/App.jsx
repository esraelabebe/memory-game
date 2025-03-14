import { getEmojisData } from "./components/api";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { useState } from "react";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  const startGame = async (e) => {
    e.preventDefault();
    try {
      const response = await getEmojisData();
      const dataSample = response.slice(0, 5);
      setEmojisData(dataSample);

      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard data={emojisData}/>}
    </main>
  );
}

export default App;