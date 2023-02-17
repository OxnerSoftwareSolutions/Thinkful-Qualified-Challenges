import React, { useEffect, useState } from "react";


function UserList({ formData, setFormData, originalTitle }) {
  useEffect(() => {
    const aborter = new AbortController();
    const loadUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: aborter.signal }
        );
        const userList = await response.json();
        setFormData({ ...formData, users: userList });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    };
    loadUsers();

    return () => aborter.abort();
  }, []);

  const {users, currentUser} = formData
  
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => setFormData({...formData, currentUser : user})}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;