import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Letter from "./components/Letter";
import LettersUsed, { LetterUsedProps } from "./components/LettersUsed";
import Tip from "./components/Tip";
import { Challenge, WORDS } from "./utils/words";

function App() {
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);
  const [challenge, setChalenge] = useState<Challenge | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [letter, setLetter] = useState("");

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randonWord = WORDS[index];
    setChalenge(randonWord);
    setAttempts(0);
    setLetter("");
  }

  function handleRestartGame() {
    alert("Jogo sendo reiniciado");
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }
    if (!letter.trim()) {
      alert("Digite uma  letra ");
    }
    const value = letter.toUpperCase();
    const exist = letterUsed.find((used) => used.value.toUpperCase() === value);
    if (exist) {
      return alert("Voce já utilizou está letra" + value);
    }
    setLetterUsed((prevState) => [...prevState, { value, correct: false }]);
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) {
    return null;
  }

  return (
    <section className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagem de programação dinâmica mais utilizadas" />
        <div className={styles.world}>
          {challenge.word.split("").map(() => (
            <Letter value="" />
          ))}
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button onClick={handleConfirm} title="Confirmar" />
        </div>
        <LettersUsed data={letterUsed} />
      </main>
    </section>
  );
}
export default App;
