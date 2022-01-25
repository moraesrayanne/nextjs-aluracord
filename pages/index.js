import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import styles from "../styles/Home.module.css";

export default function Home() {
  const username = "moraesrayanne";

  return (
    <>
      <Box className={styles.firstBox}>
        <Box className={styles.secondBox}>
          {/* Formulário */}
          <Box as="form" className={styles.form}>
            <h1 className={styles.title}>Boas vindas de volta!</h1>

            <Text variant="body3" className={styles.text}>
              Aluracord - {username}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: "#CBD2D9",
                  mainColor: "#181F25",
                  mainColorHighlight: "#FFFFFF",
                  backgroundColor: "#181F25",
                },
              }}
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
              src={`https://github.com/${username}.png`}
            />
            <Text variant="body4" className={styles.username}>
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
