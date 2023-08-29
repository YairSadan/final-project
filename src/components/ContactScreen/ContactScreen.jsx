'use client'
import React, { useEffect, useState } from 'react';
import Details from './Details/Details';
import OnlineContacts from './OnlineContacts/OnlineContacts';
import OfflineContacts from './OfflineContacts/OfflineContacts';

const ContactScreen = () => {
    const [users, setUsers] = useState([]);
    const [chosenUser, setChosenUser] = useState('');
    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await fetch('/api/users');
          const usersData = await response.json();
          setUsers(usersData);
        } catch (error) {
          console.log(error);
        }
      }
      fetchUsers();
    }, []);
  return (
    <>
      <Details chosenPlayer={chosenUser}/>
      <OnlineContacts users={users.filter((user) => user.name === 'yair')} setChosenUser={setChosenUser} />
      <OfflineContacts users={users.filter((user) => user.name !=='yair')} setChosenUser={setChosenUser}/>
    </>
  );
};

export default ContactScreen;
