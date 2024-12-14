import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={s.item}>
      <div>
        <div className={s.context}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={s.context}>
          <MdPhoneInTalk />
          <a href={`tel: ` + number}>{number}</a>
        </div>
      </div>
      <button onClick={() => handleDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
