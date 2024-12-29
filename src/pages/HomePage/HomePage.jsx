import DocumentTitle from "components/DocumentTitle/DocumentTitle";
import { MdOutlineContactPhone } from "react-icons/md";
// import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1>Access your contacts from anywhere! </h1>
      <MdOutlineContactPhone color="tomato" size={"18rem"} />
      <p>Step 1. Register to start saving your contacts</p>
      <p>Step 2. Login from anywhere and get your contacts!!!</p>
    </div>
  );
};

export default HomePage;
