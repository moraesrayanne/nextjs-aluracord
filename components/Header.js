import { Box, Text, Button } from '@skynexui/components';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <>
            <Box className={styles.headerBox}>
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}