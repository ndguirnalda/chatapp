// src/App.js

import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "./firebase";

function App() {
  const [message, setMessage] = useState("");
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    await messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  const deleteMessage = async (id) => {
    await messagesRef.doc(id).delete();
  };

  const editMessage = async (id, newText) => {
    await messagesRef.doc(id).update({ text: newText });
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages &&
          messages.map((msg) => (
            <li key={msg.id}>
              {msg.text}
              <button onClick={() => deleteMessage(msg.id)}>Delete</button>
              <button onClick={() => editMessage(msg.id, "New Text")}>
                Edit
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
