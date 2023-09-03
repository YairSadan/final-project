'use client'
import { useState } from "react";
import ContactsList from "./ContactsList/ContactsList";
import Details from "./Details/Details";

const ContactScreen = ({ currentUser, users }) => {
  const [chosenPlayer, setChosenPlayer] = useState({})
  return (
    <>
      <Details currentUser={currentUser} chosenPlayer={ chosenPlayer} />
      <ContactsList users={users} setChosenPlayer={setChosenPlayer} />
    </>
  );
};

export default ContactScreen;
