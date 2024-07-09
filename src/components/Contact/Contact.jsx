import css from "./Contact.module.css";

const Contact = ({ name, number, deleteContact }) => {
  return (
    <div className={css.contact}>
      <div className={css.contact_info}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
