import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import styles from "../styles/Chat.module.css";
import Header from "../components/Header";
import { createClient } from "@supabase/supabase-js";

import { useState, useEffect } from "react";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1Nzk3OSwiZXhwIjoxOTU5MjMzOTc5fQ.GfaAxP5NGog4Na1NoMVA_RYVcRdRShvGcRtcBMQzU9Y";
const SUPABASE_URL = "https://tanjffvyzabmpnmyjisj.supabase.co";

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const supabaseData = supabaseClient
      .from("messages")
      .select("*")
      .order('id', { ascending: false })
      .then(({ data }) => {
        setMessageList(data);
      });
  }, []);

  function handleNewMessage(newMessage) {
    const message = {
      // id: messageList.length + 1,
      de: "moraesrayanne",
      texto: newMessage,
    };

    supabaseClient
      .from("messages")
      .insert([message])
      .then(({ data }) => {
        setMessageList([data[0], ...messageList]);
      });

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
    <Box tag="ul" className={styles.messageBox}>
      {message.map((mensagem) => {
        return (
          <Text key={mensagem.id} tag="li" className={styles.text}>
            <Box className={styles.boxContent}>
              <Image
                className={styles.img}
                src={`https://github.com/${mensagem.de}.png`}
              />

              <Text tag="strong">{mensagem.de}</Text>

              <Text
                className={styles.date}
                tag="span"
                styleSheet={{
                  fontSize: "12px",
                }}
              >
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
