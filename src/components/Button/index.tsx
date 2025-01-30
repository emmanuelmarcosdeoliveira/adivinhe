type Props = React.ComponentProps<"button"> & {
  title: string;
};

import React from "react";
import styles from "./styles.module.css";
export default function Button({ title, ...rest }: Props) {
  return (
    <button type="button" className={styles.button} {...rest}>
      {title}
    </button>
  );
}
