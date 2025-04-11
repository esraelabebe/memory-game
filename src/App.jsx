import { getEmojisData } from "./components/api";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { useState } from "react";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //selectedCards track which card is selected by the user
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);


  const addMatchedCards = (selectedCardsList) => {
    if(selectedCardsList.length === 2 && selectedCardsList[0].emojiElement === selectedCardsList[1].emojiElement) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, ...selectedCardsList]);
      }
  }

  const startGame = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await getEmojisData();
      setIsLoading(false);
      const dataSlice = getDataSlice(response);
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * The getRandomIndices function takes data from an API call, generates five random numbers within the range equivalent
   * to the length of the "data" array push these numbers to randomIndicesArray variable and returns an array containing the
   * five randomly selected values.
   */
  function getRandomIndices(response) {
    const randomIndicesArray = [];
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * response.length);
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        i--;
      }
    }
    return randomIndicesArray;
  }

  function getDataSlice(response) {
    const randomIndices = getRandomIndices(response);

    const dataSlice = randomIndices.map((index) => response[index]);
    return dataSlice;
  }

  /**
   *The getEmojisArray function takes an array of five randomly selected emojis provided by the dataSlice function as
   *its parameter. It then duplicates each unique emoji's data object shuffles the array using the Fisher-Yates algorithm and
   *returns the shuffled array.
   */
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

  /**
   *what should happen when a card is clicked.
   */
  function turnCard(emojiElement, index) {
    //Check if the clicked card is already in the setSelectedCards array. selectedCardEntry will return emoji object or undefined.
    const selectedCardEntry = selectedCards.find((emoji) => emoji.index === index);
    //if the user clicked the same card twice do nothing if not assign the value in state
    if(!selectedCardEntry && selectedCards.length < 2) {
      const newSelectedCards = [...selectedCards, {emojiElement, index}];
      setSelectedCards(newSelectedCards);
      addMatchedCards(newSelectedCards);
    }else{
      setSelectedCards([{emojiElement, index}]);
    }
}

  return (
    <main>
      <h1>Memory Game</h1>
      {!isGameOn && <Form handleSubmit={startGame} loading={isLoading} />}
      {isGameOn && <MemoryCard data={emojisData} handleClick={turnCard}/>}
    </main>
  );
}

export default App;
