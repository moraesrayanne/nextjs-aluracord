import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import styles from "../styles/Chat.module.css";
import Header from "../components/Header";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  function handleNewMessage(newMessage) {
    const message = {
      id: messageList.length + 1,
      de: "moraesrayanne",
      texto: newMessage,
    };

    setMessageList([message, ...messageList]);
    setMessage("");
  }

  return (
    <Box className={styles.firstBox}>
      <Box className={styles.secondBox}>
        <Header />
        <Box className={styles.thirdBox}>
          <MessageList message={messageList} />

          <Box as="form" className={styles.form}>
            <TextField
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleNewMessage(message);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: "#000",
                marginRight: "12px",
                color: "#FFF",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function MessageList({ message }) {
  return (
    <Box 
      tag="ul" 
      className={styles.messageBox}
    >
      {message.map((mensagem) => {
        return (
          <Text 
            key={mensagem.id} 
            tag="li" 
            className={styles.text
          }>
            <Box className={styles.boxContent}>
              <Image
                className={styles.img}
                src={`https://github.com/moraesrayanne.png`}
              />
              
              <Text tag="strong">{mensagem.de}</Text>
              
              <Text className={styles.date} tag="span">
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
