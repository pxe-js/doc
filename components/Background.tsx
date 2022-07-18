import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import styles from "../styles/components/Background.module.scss";

function Background(props: { color?: string, image?: string, noDefault?: boolean }) {
    useEffect(() => {
        if (props?.color)
            document.body.style.backgroundColor = props.color;
    })

    if (!props?.color && !props?.image && !props?.noDefault)
        props = {
            image: "/background.jpg"
        }

    return <Flex className={styles.background} style={{
        backgroundImage: `url(${props?.image ?? ""})`,
    }} />;
}

export default Background;