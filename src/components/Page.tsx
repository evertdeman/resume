import React from "react";

import styles from "./Page.module.scss";

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps): React.JSX.Element {
  return <div className={styles.page}>{children}</div>;
}
