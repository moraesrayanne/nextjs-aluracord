import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();
  const blank = ''

  return (
    <>
      <Box className={styles.firstBox}>
        <Box className={styles.secondBox}>
          {/* Formulário */}
          <Box as="form" onSubmit={(e) => { 
            e.preventDefault();
            router.push("/chat")
          }} className={styles.form}>
            <h1 className={styles.title}>Bem vinde de volta!</h1>

            <Text variant="body3" className={styles.text}>
              Aluracord - {username.length > 2 ? username : ""}
            </Text>

            <TextField
              fullWidth
              placeholder="Insira o seu usuário no github"
              textFieldColors={{
                neutral: {
                  textColor: "#CBD2D9",
                  mainColor: "#181F25",
                  mainColorHighlight: "#FFFFFF",
                  backgroundColor: "#181F25",
                },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: "#FFFFFF",
                mainColor: "#2a9d8f",
                mainColorLight: "#AAA",
                mainColorStrong: "#69bab0",
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box className={styles.photoArea}>
            <Image
              className={styles.image}
              src={username.length > 2
                ? `https://github.com/${username}.png`
                : blank
            }
            />
            <Text variant="body4" className={styles.username}>
            {username.length > 2 ? username : ""}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
