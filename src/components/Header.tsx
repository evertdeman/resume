import { FaHome } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

import styles from './Header.module.scss'

const PersonalInformation = () => {
  return (
    <div>
      <FaHome /> Berlin
      <BsTelephone /> 123456789
    </div>
  )
}

export default function Header(): React.JSX.Element {
  return (
    <div className={styles.header}>
      <h1>Evert de Man</h1>
      <h3>Full-stack Developer</h3>
      <PersonalInformation />
    </div>
  )
}
