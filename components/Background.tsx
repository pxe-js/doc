import { Flex } from "@chakra-ui/react";
import styles from "../styles/components/Background.module.scss";

function Background({ props: { color, image } }: { props: { color?: string, image?: string } }) {
    return <Flex className={styles.background} style={{
        backgroundColor: color,
        backgroundImage: `url(${image})`,
    }} />;
}

export default Background;