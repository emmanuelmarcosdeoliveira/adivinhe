import styles from "./app.module.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Letter from "./components/Letter";
import Tip from "./components/Tip";

function App() {
  function handleRestartGame() {
    alert("Jogo sendo reiniciado");
  }
  return (
    <section className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagem de programação dinâmica mais utilizadas" />
        <div className={styles.world}>
          <Letter value="r" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
      </main>
    </section>
  );
}
export default App;
