import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ infocontacts, deleteContacts }) => {
  return (
    <ul className={css.list}>
      {infocontacts.map((contactItem) => (
        <li key={contactItem.id} className={css.listItem}>
          <Contact
            name={contactItem.name}
            number={contactItem.number}
            deleteContact={() => deleteContacts(contactItem.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
