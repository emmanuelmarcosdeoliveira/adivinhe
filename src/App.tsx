import styles from "./app.module.css";
import Header from "./components/Header";

function App() {
  function handleRestartGame() {
    alert("Jogo sendo reiniciado");
  }

  return (
    <section className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
      </main>
    </section>
  );
}

export default App;
