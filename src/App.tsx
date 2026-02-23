import { useState } from "react";
import { EmojiData, getEmojisData } from "./components/api";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import Form, { FormData }from "./components/Form";
import GameOver from "./components/GameOver";
import MemoryCard from "./components/MemoryCard";
import ErrorCard from "./components/ErrorCard";
import Timer from "./components/Timer";
import { HandleSubmit } from "./components/RegularButton";

interface SelectedCard {
  emojiElement: string;
  index: number;
}

export type HandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;

function App() {
  const initialFormData: FormData = {
    group: "animals-nature",
    number: 10,
  };
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<EmojiData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // selectedCards track which card is selected by the user
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<SelectedCard[]>([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);
  const [isError, setIsError] = useState(false);
  const [time, setTime] = useState(0);

  // Detect for matching cards and add them to "matchedCards" state variable.
  const addMatchedCards = (selectedCardsList: SelectedCard[]) => {
    if (
      selectedCardsList.length === 2 &&
      selectedCardsList[0].emojiElement === selectedCardsList[1].emojiElement
    ) {
      const newMatchedCards = [...matchedCards, ...selectedCardsList];
      setMatchedCards(newMatchedCards);
      gameOver(emojisData, newMatchedCards);
    }
  };

  const gameOver = (
    emojisDataArray: EmojiData[],
    matchedCardsArray: SelectedCard[],
  ) => {
    /**
     * To stop the if statement from evaluating to true when the app renders check if there is an emojisData and is being rendered
     * as memory cards.
     * Then compare the emojisData length to matchedCards length to determine there are no more cards left and the game is over.
     */
    if (
      emojisDataArray.length &&
      matchedCardsArray.length === emojisDataArray.length
    ) {
      setAreAllCardsMatched(true);
    }
  };

  function handleFormChange (e: React.ChangeEvent<HTMLSelectElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  const startGame: HandleSubmit = async (e, newFormDataNumber) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await getEmojisData();
      setIsLoading(false);
      const filteredResponse = response.filter((emoji) => {
        return emoji.group === formData.group;
      });
      const dataSlice = getDataSlice(filteredResponse, newFormDataNumber);
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      setIsGameOn(true);
      setIsFirstRender(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsFirstRender(false);
    }
  };

  /**
   * The getRandomIndices function takes data from an API call, generates five random numbers within the range equivalent
   * to the length of the "data" array push these numbers to randomIndicesArray variable and returns an array containing the
   * five randomly selected values.
   */
  function getRandomIndices(
    response: EmojiData[],
    newFormDataNumber?: number,
  ): number[] {
    const randomIndicesArray: number[] = [];
    for (let i = 0; i < (newFormDataNumber ?? formData.number) / 2; i++) {
      const randomNum = Math.floor(Math.random() * response.length);
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        i--;
      }
    }
    return randomIndicesArray;
  }

  function getDataSlice(
    response: EmojiData[],
    newFormDataNumber?: number,
  ): EmojiData[] {
    const randomIndices = getRandomIndices(response, newFormDataNumber);

    const dataSlice = randomIndices.map((index) => response[index]);
    return dataSlice;
  }

  /**
   * The getEmojisArray function takes an array of five randomly selected emojis provided by the dataSlice function as
   * its parameter. It then duplicates each unique emoji's data object shuffles the array using the Fisher-Yates algorithm and
   * returns the shuffled array.
   */
  function getEmojisArray(data: EmojiData[]): EmojiData[] {
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
   * what should happen when a card is clicked.
   */
  function turnCard(emojiElement: string, index: number) {
    if (selectedCards.length < 2) {
      const newSelectedCards: SelectedCard[] = [
        ...selectedCards,
        { emojiElement, index },
      ];
      setSelectedCards(newSelectedCards);
      addMatchedCards(newSelectedCards);
    } else {
      setSelectedCards([{ emojiElement, index }]);
    }
  }

  /**
   * This function reset the game when the user clicks the play again button.
   */
  function resetGame() {
    setIsGameOn(false);
    setSelectedCards([]);
    setMatchedCards([]);
    setAreAllCardsMatched(false);
    setTime(0);
  }

  function resetError() {
    setIsError(false);
  }

  return (
    <main className="flex flex-col items-center gap-9 min-h-screen pt-9 m-4">
      <div className="flex gap-6 items-center">
        <img
          src="/assets/Memory-Game-Logo.png"
          alt="logo"
          width="70px"
          height="70px"
        />
        <h1 className="text-teal-50 text-3xl sm:text-5xl tracking-widest m-0">
          Memory Game
        </h1>
      </div>
      {!isGameOn && !isError && (
        <Form
          handleSubmit={startGame}
          handleChange={handleFormChange}
          isFirstRender={isFirstRender}
          loading={isLoading}
          formData={formData}
        />
      )}
      {isGameOn && !areAllCardsMatched && (
        <Timer
          isGameOn={isGameOn}
          areAllCardsMatched={areAllCardsMatched}
          time={time}
          setTime={setTime}
        />
      )}
      {isGameOn && !areAllCardsMatched && (
        <AssistiveTechInfo
          emojisData={emojisData}
          matchedCards={matchedCards}
        />
      )}
      {areAllCardsMatched && (
        <GameOver
          formData={formData}
          setFormData={setFormData}
          startGame={startGame}
          resetGame={resetGame}
          time={time}
          setTime={setTime}
        />
      )}
      {isGameOn && (
        <MemoryCard
          data={emojisData}
          handleClick={turnCard}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
      {isError && <ErrorCard handleClick={resetError} />}
    </main>
  );
}

export default App;
