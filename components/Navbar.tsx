import { Heading, Stack, Link, Text } from "@chakra-ui/react";
import styles from "../styles/components/Navbar.module.scss";
import { color } from "../utils/constants";

function Navbar() {
    return <Stack direction="row" className={styles.navbar}>
        <Link href="/">
            <Heading color={color}>PXE</Heading>
        </Link>
        <Stack direction="row" className={styles.links}>
            <Link href="/docs">
                <Text>Docs</Text>
            </Link>
            <Link href="https://github.com/pxe-js" target="_blank">
                <Text>Github</Text>
            </Link>
        </Stack>
    </Stack>;
}

export default Navbar;