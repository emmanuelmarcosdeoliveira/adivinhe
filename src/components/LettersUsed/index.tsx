import Letter from "../Letter";
import styles from "./styles.module.css";
export default function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>
      <div>
        <Letter value="X" size="small" color="correct" />
        <Letter value="c" size="small" color="wrong" />
      </div>
    </div>
  );
}
