import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  // your firebase config
};
firebase.initializeApp(firebaseConfig);

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const messagesArray = Object.keys(data || {}).map((key) => ({
        id: key,
        ...data[key],
      }));
      setMessages(messagesArray);
    });
  }, []);

  const handleSendMessage = () => {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.push({
      text: newMessage,
      timestamp: Date.now(),
    });
    setNewMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatApp;
