import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

import profilePicture from "../assets/profilePicture.jpg";

import styles from "./Header.module.scss";

const ProfilePicture = () => {
  return (
    <div className={styles.profilePicture}>
      <img src={profilePicture} alt="Profile" />
    </div>
  );
};

const PersonalInformation = () => {
  return (
    <div className={styles.personalInfo}>
      <span>
        <FaHome /> Berlin
      </span>
      <span>
        <BsTelephone /> 123456789
      </span>
      <span>
        <FaGithub /> evertdeman.github.com
      </span>
      <span>
        <FaLinkedin /> linkedin.com/in/evertdeman
      </span>
    </div>
  );
};

export default function Header(): React.JSX.Element {
  return (
    <div className={styles.header}>
      <div>
        <h1>Evert de Man</h1>
        <h3>Full-stack Developer</h3>
        <PersonalInformation />
      </div>
      <ProfilePicture />
    </div>
  );
}
