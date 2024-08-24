import React from 'react'

import styles from './Page.module.scss'

interface PageProps {
  pageRef: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

export default function Page({ pageRef, children }: PageProps): React.JSX.Element {
  return <div ref={pageRef} className={styles.page}>{children}</div>
}
