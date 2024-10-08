import Page from './Page'
import Header from './Header'

import WorkInProgress from './WorkInProgress'

import styles from './FrontPage.module.scss'

interface FrontPageProps {
  pageRef: React.RefObject<HTMLDivElement>
}

export default function FrontPage({pageRef}: FrontPageProps): React.JSX.Element {
  return (
    <div className={styles.frontpage}>
      <Page pageRef={pageRef} >
        <Header />
        <WorkInProgress />
      </Page>
    </div>
  )
}
