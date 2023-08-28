'use client';
import Details from '@/components/ContactScreen/Details/Details';
import OfflineContacts from '@/components/ContactScreen/OfflineContacts/OfflineContacts';
import OnlineContacts from '@/components/ContactScreen/OnlineContacts/OnlineContacts';
import React, { useEffect, useState } from 'react';

const Contact = () => {
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

export default Contact;
