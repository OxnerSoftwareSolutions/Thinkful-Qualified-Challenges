import React, { useEffect, useState } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const originalTitle = document.title;
  const emptyState = {
    users: [],
    currentUser: {},
    albums: {},
  };
  const [formData, setFormData] = useState({ ...emptyState });

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Awesome Album App";
    return () => document.title = originalTitle;
  }, [])

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3

  return (
    <div className="App">
      <div className="left column">
        <UserList
          formData={formData}
          setFormData={setFormData}
          originalTitle={originalTitle}
        />
      </div>
      <div className="right column">
        <AlbumList formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

export default App;