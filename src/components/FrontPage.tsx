import Page from "./Page";
import Header from "./Header";

import styles from "./FrontPage.module.scss";

export default function FrontPage(): React.JSX.Element {
  return (
    <div className={styles.frontpage}>
      <Page>
        <Header />
      </Page>
    </div>
  );
}
