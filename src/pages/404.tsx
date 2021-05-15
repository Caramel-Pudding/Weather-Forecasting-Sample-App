import React, { FC, memo } from "react";
import classnames from "classnames";

import sharedStyles from "./styles.module.css";
import styles from "./404.module.css";

const Custom404: FC = () => {
  return (
    <main className={classnames(sharedStyles.main, styles.container)}>
      <h1>Well, let`s just hope the weather will be great!</h1>
    </main>
  );
};

export default memo(Custom404);
