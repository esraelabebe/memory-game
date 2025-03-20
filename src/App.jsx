import { getEmojisData } from "./components/api";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { useState } from "react";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const startGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await getEmojisData();
      setIsLoading(false);
      const dataSlice = getDataSlice(response);
      const emojisArray = getEmojisArray(dataSlice)

      setEmojisData(emojisArray)
      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  }

  function getRandomIndices(response) {
    const randomIndicesArray = [];
      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * response.length)
        if (!randomIndicesArray.includes(randomNum)) {
          randomIndicesArray.push(randomNum)
        }else {
          i--
        }
      }
      return randomIndicesArray;
  }

  function getDataSlice(response) {
    const randomIndices = getRandomIndices(response);

    const dataSlice = randomIndices.map(index => response[index]);
    return dataSlice;
  }

  function getEmojisArray(data) {
    const pairedEmojisArray = [...data, ...data];

    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }
    return pairedEmojisArray;
  }

  return (
    <main>
      <h1>Memory Game</h1>
      {!isGameOn && <Form handleSubmit={startGame} loading={isLoading }/>}
      {isGameOn && <MemoryCard data={emojisData}/>}
    </main>
  );
}

export default App;