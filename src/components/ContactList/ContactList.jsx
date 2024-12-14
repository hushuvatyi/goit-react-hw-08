import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { useSelector } from "react-redux";

import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {isLoading && <Loader />}
      {!isLoading &&
        visibleContacts &&
        !error &&
        visibleContacts.map(({ id, number, name }) => (
          <Contact key={id} id={id} number={number} name={name} />
        ))}
      {error && <Error />}
    </ul>
  );
};

export default ContactList;
