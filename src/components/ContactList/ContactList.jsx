import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map((contactItem) => (
        <li key={contactItem.id} className={css.listItem}>
          <Contact
            name={contactItem.name}
            number={contactItem.number}
            deleteContact={() => dispatch(deleteContact(contactItem.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
