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
      console.log(getRandomIndices(response));

      setEmojisData(dataSample);
      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  }

  function getRandomIndices(data) {
    const randomIndicesArray = [];
      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * data.length)
        if (!randomIndicesArray.includes(randomNum)) {
          randomIndicesArray.push(randomNum)
        }else {
          i--
        } 
      }
      return randomIndicesArray;
  }

  return (
    <main>
      <h1>Memory Game</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard data={emojisData}/>}
    </main>
  );
}

export default App;