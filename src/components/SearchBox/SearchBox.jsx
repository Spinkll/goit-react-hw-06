import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.form_container}>
      <label htmlFor="find_contacts">Find contacts by name</label>
      <input
        type="text"
        name="find_contacts"
        id="find_contacts"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
