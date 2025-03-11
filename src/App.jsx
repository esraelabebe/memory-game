import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { decodeEntity } from "html-entities";
import { useState } from "react";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  async function startGame(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://emoji-api.com/emojis?access_key=91e11c9c58356a448add4345b78ba7a7daecb358"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data from API");
      }

      const data = await response.json();
      const dataSample = data.slice(0, 5);
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
      <MemoryCard />
    </main>
  );
}

export default App;
