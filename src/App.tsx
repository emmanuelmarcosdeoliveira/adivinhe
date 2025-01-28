import styles from "./app.module.css";
import Header from "./components/Header";
import Tip from "./components/Tip";
import Letter from "./Letter";

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
        <div></div>
      </main>
    </section>
  );
}
export default App;
