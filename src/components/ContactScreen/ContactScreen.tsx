'use client'
import React, { useState } from "react";
import ContactsList from "./ContactsList/ContactsList";
import Details from "./Details/Details";
import { User } from "@prisma/client";

interface ContactScreenProps {
  currentUser: User;
  users: User[];
}

const ContactScreen : React.FC<ContactScreenProps> = ({ currentUser, users }) => {
  const [chosenPlayer, setChosenPlayer] = useState(users[0])
  return (
    <>
      <Details currentUser={currentUser} chosenPlayer={chosenPlayer} />
      <ContactsList users={users} setChosenPlayer={setChosenPlayer} />
    </>
  );
};

export default ContactScreen;
