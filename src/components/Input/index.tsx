import React from "react";
import styles from "./styles.module.css";
type Props = React.ComponentProps<"input">;

export default function Input({ ...rest }: Props) {
  return <input className={styles.input} type="text" name="" id="" {...rest} />;
}
