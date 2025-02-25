import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Letter from "./components/Letter";
import LettersUsed, { LetterUsedProps } from "./components/LettersUsed";
import Tip from "./components/Tip";
import { Challenge, WORDS } from "./utils/words";
const ATTEMPTS_MARGIN = 5;

function App() {
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);
  const [challenge, setChalenge] = useState<Challenge | null>(null);
  const [letter, setLetter] = useState("");
  const [score, setScore] = useState(0);

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randonWord = WORDS[index];
    setChalenge(randonWord);
    setScore(0);
    setLetter("");
    setLetterUsed([]);
  }

  function handleRestartGame() {
    const isConfirmed = window.confirm(
      "Tem certeza que quer reiniciar o Jogo ?"
    );
    if (isConfirmed) {
      startGame();
    }
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
      setLetter("");
      return alert("Voce já utilizou está letra " + value);
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;
    //console.log(hits);

    const correct = hits > 0;
    console.log(correct);

    const currentScore = score + hits;
    console.log(currentScore);

    setLetterUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);
    setLetter("");
  }

  const endGame = useCallback((message: string) => {
    alert(message);
    startGame();
  }, []);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) {
      return;
    }
    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns, você descobriu a palavra");
      }
      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN;
      if (letterUsed.length === attemptLimit) {
        return endGame("Que pena você usou todas as tentativas ");
      }
    }, 200);
  }, [score, letterUsed.length, challenge, endGame]);

  if (!challenge) {
    return null;
  }

  return (
    <section className={styles.container}>
      <main>
        <Header
          current={letterUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />
        <div className={styles.world}>
          {challenge.word.split("").map((letter, index) => {
            const leterUsed = letterUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );
            return (
              <Letter
                key={index}
                value={leterUsed?.value}
                color={leterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
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
