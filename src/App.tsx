import styles from "./app.module.css";
import Header from "./components/Header";
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
      </main>
    </section>
  );
}
export default App;
