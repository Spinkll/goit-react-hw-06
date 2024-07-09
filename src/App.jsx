import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const infocontact = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const getInitialContact = () => {
    const savedContact = window.localStorage.getItem("saved-contact");
    return savedContact ? JSON.parse(savedContact) : infocontact;
  };

  const [contact, setContact] = useState(getInitialContact);
  const [inputValue, setInputValue] = useState("");

  const searchContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const deleteContact = (id) => {
    setContact((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const addContact = (newContact) => {
    setContact((prevContacts) => [...prevContacts, newContact]);
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contact));
  }, [contact]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ContactList
        infocontacts={searchContact}
        deleteContacts={deleteContact}
      />
    </>
  );
}

export default App;
